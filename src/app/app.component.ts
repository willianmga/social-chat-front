import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {ChatService, LoginRequest, ResponseStatus, SessionDetails} from './chat.service';
import {SystemInfoComponent} from './system-info/system-info.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  sessionDetails: SessionDetails;
  title = 'SocialChat';

  constructor(private chatService: ChatService, private router: Router, private systemInfoDialog: MatDialog) {
    this.loadSession();
  }

  loadSession(): void {
    this.chatService
      .getSessionDetailsObservable()
      .subscribe(sessionDetails => {
        this.sessionDetails = sessionDetails;
      });
  }

  navigateToPage(page: string): void {
    setTimeout(
      () => this.router.navigate([page]),
      3000
    );
  }

  login(loginRequest: LoginRequest): void {

    this.chatService
      .login(loginRequest)
      .subscribe(loginResponse => {

        if (loginResponse.status === ResponseStatus.SUCCESS) {

          const sessionDetails: SessionDetails = {
            loggedIn: true,
            token: loginResponse.token,
            loggedInUser: loginResponse.user
          };

          this.registerSession(sessionDetails);

        }

      });

  }

  signup(name: string, username: string): void {

    this.chatService
      .signup(name, username)
      .subscribe((signupResponse) => {

        if (signupResponse.status === ResponseStatus.SUCCESS) {

          const sessionDetails: SessionDetails = {
            loggedIn: true,
            token: signupResponse.token,
            loggedInUser: signupResponse.user
          };

          this.registerSession(sessionDetails);
        }

      });

  }

  logout(): void {
    this.chatService.logoff();
    this.router.navigate(['/login']);
  }

  showSystemInfo(): void {
    this.systemInfoDialog.open(SystemInfoComponent);
  }

  isLoggedIn(): boolean {
    return this.sessionDetails?.loggedIn;
  }

  private registerSession(sessionDetails: SessionDetails): void {
    this.chatService.registerSession(sessionDetails);
    this.chatService
      .getSessionDetailsObservable()
      .toPromise()
      .then(sessionDetails => {
        this.sessionDetails = sessionDetails;
        this.navigateToPage('/chat');
      });
  }

}
