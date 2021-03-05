import {Component} from '@angular/core';
import {ChatService, Contact, ContactType, LoginRequest, ResponseStatus, SessionDetails, User} from './chat.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  sessionDetails: SessionDetails;
  availableUsers: Array<Contact>;
  title = 'SocialChat';

  constructor(private chatService: ChatService, private router: Router) {
    this.checkLoggedIn();
  }

  checkLoggedIn(): void {

    this.chatService
      .getSessionDetailsObservable()
      .subscribe(sessionDetails => {
        this.sessionDetails = sessionDetails;
        if (sessionDetails?.loggedIn) {
          this.getAvailableUsers();
          this.router.navigate(['/chat']);
        } else {
          this.router.navigate(['/login']);
        }
      });

  }

  checkValidSession(): Observable<SessionDetails> {
    return new Observable((observer) => {
      this.chatService
        .getSessionDetailsObservable()
        .subscribe(sessionDetails => {
          if (!sessionDetails.loggedIn) {
            this.router.navigate(['/login']);
            observer.error(new Error('not logged in'));
          }
          observer.next(sessionDetails);
          observer.complete();
        });
    });
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
        // } else {
        //   this.chatService.deregisterSession();
        // }

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
        // } else {
        //   this.chatService.deregisterSession();
        // }

      });

  }

  logout(): void {
    this.chatService.logoff();
    this.checkLoggedIn();
  }

  getAvailableUsers(): void {
    this.chatService
      .getContactsObservable()
      .subscribe(response => {
        this.availableUsers = response
          .filter(contact => contact.contactType !== ContactType.GROUP);
      });
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
        this.router.navigate(['/chat']);
      });
  }

}
