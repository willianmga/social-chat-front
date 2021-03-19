import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {ChatWebSocketService, MessageType, RequestMessage, SessionDetails} from '../chat-web-socket.service';
import {Router} from '@angular/router';

const loggedOffSessionDetails: SessionDetails = {
  loggedIn: false,
  token: undefined,
  loggedInUser: undefined
};

const logoffMessage: RequestMessage = {
  type: MessageType.LOGOFF
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
              private chatService: ChatWebSocketService) {
    this.sessionDetailsSubject = new BehaviorSubject<SessionDetails>(loggedOffSessionDetails);
    this.localStorage = window.localStorage;
    this.subscribe();
    this.openSession();
  }

  subscribe(): void {
    this.chatService
      .getWebSocketObservable()
      .subscribe(responseMessage => {
        if (responseMessage.type === MessageType.NOT_AUTHENTICATED) {
          this.unauthorizedOrClosed();
        }
      });
  }

  openSession(): void {
    this.sessionDetailsSubject.next(this.sessionDetails);
    this.loadFromLocalStorage();
  }

  registerSession(session: SessionDetails): void {
    this.sessionDetails = session;
    this.localStorage.setItem(SESSION_KEY, JSON.stringify(this.sessionDetails)); // TODO: don't save session details on local storage
    this.sessionDetailsSubject.next(this.sessionDetails);
  }

  logoff(): void {
    this.deregisterSession();
    this.chatService.resetConnection();
  }

  getToken(): string {
    return this.sessionDetails?.token;
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

  private loadFromLocalStorage(): void {
    const sessionJson: string = this.localStorage.getItem(SESSION_KEY);
    this.sessionDetails = (sessionJson !== undefined)
      ? JSON.parse(sessionJson)
      : loggedOffSessionDetails;
    this.sessionDetailsSubject.next(this.sessionDetails);
  }

  private deregisterSession(): void {
    this.chatService.sendWebSocketMessage(logoffMessage);
    this.sessionDetails = loggedOffSessionDetails;
    this.localStorage.removeItem(SESSION_KEY);
    this.sessionDetailsSubject.next(this.sessionDetails);
    this.chatService.closeWebsocketConnection();
    this.chatService.openWebSocketConnection();
  }

  private unauthorizedOrClosed(): void {
    this.deregisterSession();
    this.router.navigate(['/login']);
  }

}
