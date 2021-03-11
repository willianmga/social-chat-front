import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ChatService, ResponseStatus, SessionDetails} from '../chat.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  hide = true;
  signingUp = false;
  error = false;
  errorMessage?: string;

  constructor(private chatService: ChatService, private router: Router) { }

  ngOnInit(): void {
  }

  signup(name: string, username: string, password: string): void {

    this.signingUp = true;
    this.error = false;

    this.chatService
      .signup(name, username, password)
      .subscribe((signupResponse) => {

        if (signupResponse.status === ResponseStatus.SUCCESS) {

          const sessionDetails: SessionDetails = {
            loggedIn: true,
            token: signupResponse.token,
            loggedInUser: signupResponse.user
          };

          this.chatService.registerSession(sessionDetails);
          this.router.navigate(['/chat']);

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
      case ResponseStatus.USERNAME_IN_USE:
        return 'Error: This username is already in use';
      case ResponseStatus.INVALID_NAME:
        return 'Error: Invalid name';
      case ResponseStatus.INVALID_USERNAME:
        return 'Error: Invalid username';
      case ResponseStatus.INVALID_PASSWORD:
        return 'Error: Invalid password';
      default:
        return 'Sorry, it\'s us. Try again..';
    }
  }

}
