import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {MessageType, SessionDetails, User, WebSocketChatServerService} from './web-socket-chat-server.service';
import {Router} from '@angular/router';

const loggedOffSessionDetails: SessionDetails = {
  loggedIn: false,
  loggedInUser: undefined
};

const SESSION_KEY = 'session';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private sessionDetailsSubject: BehaviorSubject<SessionDetails>;
  private sessionDetails: SessionDetails;
  private localStorage: Storage;

  constructor(private router: Router,
              private chatService: WebSocketChatServerService) {
    this.sessionDetailsSubject = new BehaviorSubject<SessionDetails>(loggedOffSessionDetails);
    this.localStorage = window.localStorage;
    this.tryRestoreSessionFromLocalStorage();
  }

  registerSession(user: User): void {
    this.sessionDetails = {
      loggedIn: true,
      loggedInUser: user
    };
    const base64Encoded = btoa(JSON.stringify(this.sessionDetails));
    this.localStorage.setItem(SESSION_KEY, base64Encoded);
    this.startSessionConnection();
  }

  logoff(): void {
    this.deregisterSessionAndCloseConnection();
    this.chatService.closeWebsocketConnection();
  }

  getSessionDetails(): SessionDetails {
    return this.sessionDetails;
  }

  isLoggedIn(): boolean {
    return this.sessionDetails?.loggedIn;
  }

  getSessionDetailsObservable(): Observable<SessionDetails> {
    return this.sessionDetailsSubject;
  }

  private unauthorizedOrClosed(): void {
    this.deregisterSessionAndCloseConnection();
    this.router.navigate(['/login']);
  }

  private startSessionConnection(): void {
    this.sessionDetailsSubject.next(this.sessionDetails);
    this.chatService.openConnection()
      .subscribe(() => {
          this.watchWebSocketSession();
        },
        error => {
          this.deregisterSessionAndCloseConnection();
          console.error('clearing session due to error when opening connection');
        });
  }

  private watchWebSocketSession(): void {
    this.chatService
      .getWebSocketObservable()
      .subscribe(responseMessage => {
        if (responseMessage.type === MessageType.NOT_AUTHENTICATED) {
          this.unauthorizedOrClosed();
        }
      });
  }

  private tryRestoreSessionFromLocalStorage(): void {
    this.loadFromLocalStorage()
      .subscribe(sessionDetails => {
          this.sessionDetails = sessionDetails;
          this.startSessionConnection();
        },
        error => {
          this.deregisterSessionAndCloseConnection();
        });
  }

  private loadFromLocalStorage(): Observable<SessionDetails> {
    return new Observable(subscriber => {
      try {
        const sessionBase64: string = this.localStorage.getItem(SESSION_KEY);
        const sessionDetails: SessionDetails = JSON.parse(atob(sessionBase64));
        subscriber.next(sessionDetails);
      } catch (e) {
        subscriber.error(new Error('Cant parse existing session. Logging off'));
      }
    });
  }

  private deregisterSessionAndCloseConnection(): void {
    this.sessionDetails = loggedOffSessionDetails;
    this.localStorage.removeItem(SESSION_KEY);
    this.sessionDetailsSubject.next(this.sessionDetails);
    this.chatService.closeWebsocketConnection();
  }

}
