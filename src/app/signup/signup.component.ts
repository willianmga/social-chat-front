import {Component, OnInit} from '@angular/core';
import {AppComponent} from '../app.component';
import {Router} from '@angular/router';
import {ChatService, ResponseStatus, SessionDetails, SignupResponse} from '../chat.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signingUp = false;
  error = false;
  errorMessage?: string;

  constructor(private chatService: ChatService, private appComponent: AppComponent, private router: Router) { }

  ngOnInit(): void {
  }

  signup(name: string, username: string): void {

    this.signingUp = true;
    this.error = false;

    this.chatService
      .signup(name, username)
      .subscribe((signupResponse) => {

        if (signupResponse.status === ResponseStatus.SUCCESS) {

          const sessionDetails: SessionDetails = {
            loggedIn: true,
            token: signupResponse.token,
            loggedInUser: signupResponse.user
          };

          this.chatService.registerSession(sessionDetails);
          this.appComponent.navigateToPage('/chat');

        } else {
          this.signingUp = false;
          this.errorMessage = this.getErrorMessage(signupResponse.status);
          this.error = true;
        }

      });

  }

  login(): void {
    this.router.navigate(['/login']);
  }

  private getErrorMessage(status: ResponseStatus): string {
    switch (status) {
      case ResponseStatus.INVALID_CREDENTIALS:
        return 'Error: Invalid Credentials';
      default:
        return 'Sorry, it\'s us. Try again..';
    }
  }

}
