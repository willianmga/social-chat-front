import { Component, OnInit } from '@angular/core';
import {ChatService, LoginRequest, ResponseStatus, SessionDetails} from '../chat.service';
import {AppComponent} from '../app.component';
import {Router} from '@angular/router';

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

  constructor(private chatService: ChatService, private router: Router, private appComponent: AppComponent) { }

  ngOnInit(): void {
  }

  login(username: string, password: string): void {

    this.loggingIn = true;
    this.error = false;

    const loginRequest: LoginRequest = {
      username,
      password
    };

    this.chatService
      .login(loginRequest)
      .subscribe(loginResponse => {

        if (loginResponse.status === ResponseStatus.SUCCESS) {

          const sessionDetails: SessionDetails = {
            loggedIn: true,
            token: loginResponse.token,
            loggedInUser: loginResponse.user
          };

          this.chatService.registerSession(sessionDetails);
          this.appComponent.navigateToPage('/chat');

        } else {
          this.loggingIn = false;
          this.errorMessage = this.getErrorMessage(loginResponse.status);
          this.error = true;
        }

      });

  }

  signup(): void {
    this.router.navigate(['/signup']);
  }

  private getErrorMessage(status: ResponseStatus): string {
    switch (status) {
      case ResponseStatus.INVALID_CREDENTIALS:
        return 'Error: Invalid Credentials';
      default:
        return 'Sorry, It\'s us. Try again..';
    }
  }

}
