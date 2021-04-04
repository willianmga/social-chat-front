import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {
  AuthenticationResponse,
  ResponseStatus,
  ValidationError,
  ValidationType
} from '../service/web-socket-chat-server.service';
import {SignupService} from '../service/signup.service';
import {SessionService} from '../service/session.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  unspecifiedErrorMessage = 'Sorry, it\'s us. Try again.';
  invalidNameErrorMessage = 'Invalid name';
  invalidUsernameErrorMessage = 'Invalid username';
  invalidPasswordErrorMessage = 'Invalid password';
  usernameTakenErrorMessage = 'Username in use. Try another one';

  hide = true;
  signingUp = false;
  unspecifiedError = false;
  invalidName = false;
  invalidUsername = false;
  invalidPassword = false;
  usernameTaken = false;

  constructor(private router: Router,
              private signUpService: SignupService,
              private sessionService: SessionService) { }

  ngOnInit(): void {
  }

  signup(name: string, username: string, password: string): void {

    this.signingUp = true;
    this.unspecifiedError = false;
    this.invalidName = false;
    this.invalidUsername = false;
    this.invalidPassword = false;
    this.usernameTaken = false;

    this.signUpService
      .signup(name, username, password)
      .subscribe((signupResponse) => {

        if (signupResponse.status === ResponseStatus.SUCCESS) {
          this.sessionService.registerSession(signupResponse.user);
          this.router.navigate(['/chat']);
        } else {
          this.unspecifiedError = true;
        }

        this.signingUp = false;
      }, error => {
        if (error.status === 400) {
          const errorResponse: AuthenticationResponse = error.error;
          if (errorResponse.status === ResponseStatus.INVALID_REQUEST) {
            this.invalidName = this.hasError(errorResponse.errors, ValidationType.INVALID_NAME);
            this.invalidUsername = this.hasError(errorResponse.errors, ValidationType.INVALID_USERNAME);
            this.invalidPassword = this.hasError(errorResponse.errors, ValidationType.INVALID_PASSWORD);
            this.usernameTaken = this.hasError(errorResponse.errors, ValidationType.USERNAME_IN_USE);
          }
        } else if (error.status === 401 || error.status === 403) {
          this.router.navigate(['/login']);
        } else {
          this.unspecifiedError = true;
        }

        this.signingUp = false;
      });

  }

  login(): void {
    this.router.navigate(['/login']);
  }

  private hasError(errors: Array<ValidationError>, validationType: ValidationType): boolean {
    return errors
      .find(validationError => validationError.type === validationType) !== undefined;
  }

}
