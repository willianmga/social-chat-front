import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject, interval } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { environment } from '../environments/environment';
import {AppComponent} from './app.component';
import {Router} from '@angular/router';

export enum MessageType {
  CONTACTS_LIST = 'CONTACTS_LIST',
  NEW_CONTACT_REGISTERED = 'NEW_CONTACT_REGISTERED',
  USER_MESSAGE = 'USER_MESSAGE',
  PING = 'PING',
  PONG = 'PONG',
  CONNECTED = 'CONNECTED',
  DISCONNECTED = 'DISCONNECTED',
  AUTHENTICATE = 'AUTHENTICATE',
  SIGNUP = 'SIGNUP',
  LOGOFF = 'LOGOFF',
  NOT_AUTHENTICATED = 'NOT_AUTHENTICATED',
  NOT_AUTHORIZED = 'NOT_AUTHORIZED'
}

export enum DestinationType {
  USER = 'USER',
  GROUP = 'GROUP',
  ALL_USERS_GROUP = 'ALL_USERS_GROUP'
}

export enum ContactType {
  USER = 'USER',
  GROUP = 'GROUP'
}

export enum ResponseStatus {
  SUCCESS = 'SUCCESS',
  INVALID_CREDENTIALS = 'INVALID_CREDENTIALS',
  SERVER_ERROR = 'SERVER_ERROR'
}

export interface SessionDetails {
  loggedIn: boolean;
  token: string;
  loggedInUser: any;
}

export interface RequestMessage {
  type: MessageType;
  seqId?: number;
  token?: string;
  payload?: any;
}

export interface ResponseMessage {
  type: MessageType;
  payload?: any;
}

export interface ChatMessage {
  id?: string;
  from: string;
  destinationType: DestinationType;
  destinationId: string;
  message: string;
  date?: Date;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: User;
  status: ResponseStatus;
}

export interface SignupResponse {
  token: string;
  user: User;
  status: ResponseStatus;
}

export interface User {
  id: string;
  name: string;
  description: string;
  contactType: ContactType;
  avatar: string;
}

export interface Contact {
  id: string;
  name: string;
  description: string;
  contactType: ContactType;
  avatar: string;
  chatHistory?: Array<ChatMessage>;
}

const pingMessage: RequestMessage = {
  type: MessageType.PING
};

const logoffMessage: RequestMessage = {
  type: MessageType.LOGOFF
};

const loggedOffSessionDetails: SessionDetails = {
  loggedIn: false,
  token: undefined,
  loggedInUser: undefined
};

const SESSION_KEY = 'session';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  sessionDetails: SessionDetails;
  chatServerWebSocket: WebSocketSubject<any>;
  messagesSubject: Subject<any> = new Subject<any>();
  contactsSubject: Subject<Array<any>> = new Subject<Array<any>>();
  sessionDetailsSubject: Subject<SessionDetails> = new Subject<SessionDetails>();
  loginSubject: Subject<LoginResponse> = new Subject();
  signupSubject: Subject<SignupResponse> = new Subject();
  localStorage: Storage;

  constructor(private router: Router) {
    this.localStorage = window.localStorage;
    this.loadSession();
    this.openWebSocketConnection();
  }

  loadSession(): void {

    const sessionJson: string = this.localStorage.getItem('session');

    if (sessionJson !== undefined) {
      this.sessionDetails = JSON.parse(sessionJson);
    } else {
      this.sessionDetails = loggedOffSessionDetails;
    }

    this.sessionDetailsSubject.next(this.sessionDetails);
  }

  openWebSocketConnection(): void {

    this.sessionDetailsSubject.next(this.sessionDetails);
    this.chatServerWebSocket = webSocket<ResponseMessage>(`${environment.backendUrl}`);
    this.chatServerWebSocket.asObservable()
      .subscribe(responseMessage => {

        const messagePayload = responseMessage.payload;

        if (responseMessage.type === MessageType.USER_MESSAGE) {
          this.messagesSubject.next(messagePayload);
        } else if (responseMessage.type === MessageType.CONTACTS_LIST) {
          this.contactsSubject.next(this.formatContacts(messagePayload));
        } else if (responseMessage.type === MessageType.NEW_CONTACT_REGISTERED) {
          this.contactsSubject.next(this.formatContacts(messagePayload));
        } else if (responseMessage.type === MessageType.AUTHENTICATE) {
          this.loginSubject.next(messagePayload);
        } else if (responseMessage.type === MessageType.SIGNUP) {
          this.signupSubject.next(messagePayload);
        } else if (responseMessage.type === MessageType.NOT_AUTHENTICATED) {
          this.unauthorizedOrClosed();
        }

      },
      (error) => {
        if (this.chatServerWebSocket.isStopped) {
          this.unauthorizedOrClosed();
        }

        console.error('Error occuried on websocket connection');
        console.error(error);
      });

    this.playPingPong();

  }

  playPingPong(): void {
    interval(5000)
      .subscribe(val => {
        this.chatServerWebSocket.next(pingMessage);
      });
  }

  closeWebsocketConnection(): void {
    this.chatServerWebSocket.complete();
  }

  login(loginRequest: LoginRequest): Observable<LoginResponse> {

    const authenticateRequest: RequestMessage = {
      type: MessageType.AUTHENTICATE,
      payload: loginRequest
    };

    this.chatServerWebSocket.next(authenticateRequest);
    return this.loginSubject;
  }

  signup(name: string, username: string): Observable<SignupResponse> {

    const authenticateRequest: RequestMessage = {
      type: MessageType.SIGNUP,
      payload: {
        name,
        username
      }
    };

    this.chatServerWebSocket.next(authenticateRequest);
    return this.signupSubject;
  }

  sendMessage(message: string, destinationContact: Contact): ChatMessage {

    const destinationType = (destinationContact.contactType === ContactType.USER)
      ? DestinationType.USER
      : DestinationType.ALL_USERS_GROUP;

    const chatMessage: ChatMessage = {
      from: this.sessionDetails.loggedInUser.id,
      destinationType,
      destinationId: destinationContact.id,
      message
    };

    const newMessage: RequestMessage = {
      type: MessageType.USER_MESSAGE,
      token: this.sessionDetails.token,
      payload: chatMessage
    };

    this.chatServerWebSocket.next(newMessage);

    return chatMessage;
  }

  requestContacts(): Observable<Array<Contact>> {
    const contactsRequestMessage: RequestMessage = {
      type: MessageType.CONTACTS_LIST,
      token: this.sessionDetails.token
    };

    this.chatServerWebSocket.next(contactsRequestMessage);
    return this.contactsSubject;
  }

  registerSession(session: SessionDetails): void {
    this.sessionDetails = session;
    this.localStorage.setItem(SESSION_KEY, JSON.stringify(this.sessionDetails));
    this.sessionDetailsSubject.next(this.sessionDetails);
  }

  deregisterSession(): void {
    this.chatServerWebSocket.next(logoffMessage);
    this.sessionDetails = loggedOffSessionDetails;
    this.localStorage.removeItem(SESSION_KEY);
    this.sessionDetailsSubject.next(this.sessionDetails);
    this.closeWebsocketConnection();
    this.openWebSocketConnection();
  }

  getContactsObservable(): Observable<Array<Contact>> {
    return this.contactsSubject;
  }

  getSessionDetailsObservable(): Observable<SessionDetails> {
    const session = this.sessionDetails;
    return new Observable((observer) => {
      observer.next(session);
      observer.complete();
    });
  }

  private unauthorizedOrClosed(): void {
    this.deregisterSession();
    this.router.navigate(['/login']);
  }

  private formatContacts(contacts: Array<Contact>): Array<Contact> {
    return contacts
      .map(contact => {
        contact.chatHistory = [];
        return contact;
      });
  }

}
