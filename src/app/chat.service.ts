import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject, interval, throwError } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';

export interface SessionDetails {
  loggedIn: boolean;
  token: String;
  loggedInUser: any;   
}

export enum MessageType {
  CONTACTS_LIST = "CONTACTS_LIST",
  USER_MESSAGE = "USER_MESSAGE",
  PING = "PING",
  PONG = "PONG",
  CONNECTED = "CONNECTED",
  DISCONNECTED = "DISCONNECTED",
  AUTHENTICATE = "AUTHENTICATE",
  LOGOFF = "LOGOFF",
  NOT_AUTHENTICATED = "NOT_AUTHENTICATED",
  NOT_AUTHORIZED = "NOT_AUTHORIZED"
}

export enum DestinationType {
  USER = "USER",
  GROUP = "GROUP",
  ALL_USERS_GROUP = "ALL_USERS_GROUP"
}

export interface RequestMessage {
  type: MessageType;
  seqId?: number,
  token?: String,
  payload?: any;
}

export interface ResponseMessage {
  type: MessageType;
  payload?: any;
}

export interface ChatMessage {
  id?: String,
  from: String,
  destinationType: DestinationType,
  destinationId: String,
  message: String,
  date?: Date
}

export interface LoginRequest {
  username: String;
  passowrd: String;
}

export interface LoginResponse {
  token: String;
  userDetails: User;
}

export enum ContactType {
  USER, GROUP
}

export interface User {
  id: String;
  name: String,
  description: String,
  contactType: ContactType,
  avatar: String
}

const pingMessage: RequestMessage = {
  type: MessageType.PING
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  loggedInUser: User;



  sessionDetails: SessionDetails = {
    loggedIn: false,
    token: undefined,
    loggedInUser: undefined
  }

  chatServerWebSocket: WebSocketSubject<any>;
  loggedInUserSubject: BehaviorSubject<any> = new BehaviorSubject<any>({});
  messagesSubject: Subject<any> = new Subject<any>();
  contactsSubject: Subject<Array<any>> = new Subject<Array<any>>();
  sessionDetailsSubject: Subject<SessionDetails> = new Subject<SessionDetails>();
  loginSubject: Subject<LoginResponse> = new Subject();
  
  constructor(private httpClient: HttpClient) {
    this.openWebSocketConnection();
  }

  openWebSocketConnection(): void {

    this.loggedInUserSubject.next(this.loggedInUser);

    this.chatServerWebSocket = webSocket<ResponseMessage>(`${environment.backendUrl}`);

    this.chatServerWebSocket.asObservable()
      .subscribe(responseMessage => {

        if (responseMessage.type === MessageType.USER_MESSAGE) {
          this.messagesSubject.next(responseMessage);
        } else if (responseMessage.type === MessageType.CONTACTS_LIST) {
          this.contactsSubject.next(this.formatContacts(responseMessage.payload.content));
        } else if (responseMessage.type === MessageType.AUTHENTICATE) {
          this.loginSubject.next(responseMessage.payload);
        }

      }, 
      (error) => {
        console.error("Error occured on websocket connection");
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
    this.chatServerWebSocket.unsubscribe();
  }

  login(loginRequest: LoginRequest): Observable<LoginResponse> {

    const authenticateRequest: RequestMessage = {
      type: MessageType.AUTHENTICATE,
      payload: loginRequest
    }

    this.chatServerWebSocket.next(authenticateRequest);

    this.loginSubject
      .subscribe(loginResponse => {
        
        const newSession: SessionDetails = {
          loggedIn: true,
          token: loginResponse.token,
          loggedInUser: loginResponse.userDetails
        }

        this.sessionDetails = newSession;

      });

    return this.loginSubject;
  }

  getContacts(): Observable<Array<any>> {
    return this.contactsSubject;
  }

  getLoggedInUser(): Observable<any> {
    return this.loggedInUserSubject;
  }

  getSessionDetails(): Observable<SessionDetails> {
    return this.sessionDetailsSubject;
  }

  sendMessage(message: string, destinationContact: any): ChatMessage {

    const destinationType = (destinationContact.contactType == "USER")
      ? DestinationType.USER
      : DestinationType.ALL_USERS_GROUP;

    const chatMessage: ChatMessage = {
      from: this.loggedInUser.id,
      destinationType: destinationType,
      destinationId: destinationContact.id,
      message: message
    }

    const newMessage: RequestMessage = {
      type: MessageType.USER_MESSAGE,
      token: this.sessionDetails.token,
      payload: chatMessage
    }

    this.chatServerWebSocket.next(newMessage);

    return chatMessage;
  }

  switchUser(user: any): void {
    this.loggedInUser = user;
    this.closeWebsocketConnection();
    this.openWebSocketConnection();
  }

  private formatContacts(contacts: Array<any>): Array<any> {
    return contacts
      .map(contact => {
        contact.chatHistory = [];
        return contact;
      })
  }

}