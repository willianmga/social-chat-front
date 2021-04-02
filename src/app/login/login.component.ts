import {Component, OnInit} from '@angular/core';
import {LoginRequest, ResponseStatus} from '../service/web-socket-chat-server.service';
import {Router} from '@angular/router';
import {LoginService} from '../service/login.service';
import {SessionService} from '../service/session.service';

const SERVER_ERROR_MESSAGE = 'Ops, it\'s. Please, try again.';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  loggingIn = false;
  error = false;
  errorMessage?: string;

  constructor(private router: Router,
              private loginService: LoginService,
              private sessionService: SessionService) {}

  ngOnInit(): void {
  }

  login(username: string, password: string): void {

    this.loggingIn = true;
    this.error = false;

    this.loginService
      .getIp()
      .subscribe(ipResponse => {
        this.doLogin(username, password, ipResponse.ip);
      }, exception => {
        this.doLogin(username, password, '0.0.0.0');
      });
  }

  signup(): void {
    this.router.navigate(['/signup']);
  }

  private doLogin(username: string, password: string, clientIp: string): void {

    const loginRequest: LoginRequest = {
      username,
      password,
      userDeviceDetails: {
        userIp: clientIp,
        userAgent: window.navigator?.userAgent,
        screenResolution: {
          width: window.innerWidth?.toString(),
          height: window.innerHeight?.toString(),
          orientation: window.orientation?.toString()
        }
      }
    };

    this.loginService
      .login(loginRequest)
      .subscribe(loginResponse => {
        if (loginResponse.status === ResponseStatus.SUCCESS) {
          this.sessionService.registerSession(loginResponse.user);
          this.router.navigate(['/chat']);
        } else {
          this.handleError(this.getErrorMessage(loginResponse.status));
        }
      }, error => {
        this.handleError(SERVER_ERROR_MESSAGE);
    });
  }

  private handleError(errorMessage: string): void {
    this.loggingIn = false;
    this.errorMessage = errorMessage;
    this.error = true;
  }

  private getErrorMessage(status: ResponseStatus): string {
    switch (status) {
      case ResponseStatus.INVALID_CREDENTIALS:
        return 'Error: Invalid Credentials';
      default:
        return SERVER_ERROR_MESSAGE;
    }
  }

}
