import {Injectable} from '@angular/core';
import {BehaviorSubject, interval, Observable, Subject} from 'rxjs';
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';
import {environment} from '../environments/environment';

export enum MessageType {
  CONTACTS_LIST = 'CONTACTS_LIST',
  CHAT_HISTORY = 'CHAT_HISTORY',
  NEW_CONTACT_REGISTERED = 'NEW_CONTACT_REGISTERED',
  USER_MESSAGE = 'USER_MESSAGE',
  PING = 'PING',
  PONG = 'PONG',
  CONNECTED = 'CONNECTED',
  DISCONNECTED = 'DISCONNECTED',
  AUTHENTICATE = 'AUTHENTICATE',
  REAUTHENTICATE = 'REAUTHENTICATE',
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
  INVALID_NAME = 'INVALID_NAME',
  INVALID_USERNAME = 'INVALID_USERNAME',
  INVALID_PASSWORD = 'INVALID_PASSWORD',
  SERVER_ERROR = 'SERVER_ERROR',
  USERNAME_IN_USE = 'USERNAME_IN_USE'
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

export enum MimeType {
  TEXT = 'TEXT'
}

export interface ChatMessage {
  id?: string;
  from?: string;
  destinationType: DestinationType;
  destinationId: string;
  content: string;
  mimeType: MimeType;
  date?: Date;
}

export interface ScreenResolution {
  width: string;
  height: string;
  orientation: string;
}

export interface UserDeviceDetails {
  userIp: string;
  userAgent: string;
  screenResolution: ScreenResolution;
}

export interface LoginRequest {
  username: string;
  password: string;
  userDeviceDetails: UserDeviceDetails;
}

export interface LoginResponse {
  token: string;
  user: User;
  status: ResponseStatus;
  message?: string;
}

export interface SignupResponse {
  token: string;
  user: User;
  status: ResponseStatus;
}

export interface ChatHistoryRequest {
  destinationId: string;
  lastMessageId?: string;
}

export interface ChatHistoryResponse {
  destinationId: string;
  chatHistory: Array<ChatMessage>;
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
  chatHistoryLoaded: boolean;
  chatHistory?: Array<ChatMessage>;
}

export enum ChatConnectionStatus {
  CONNECTING = 'Connecting...',
  RECONNECTING = 'Reconnecting...',
  ONLINE = 'Online',
  OFFLINE = 'Offline'
}

export const MOBILE_MAX_WIDTH = 450;

const pingMessage: RequestMessage = {
  type: MessageType.PING
};

const MAX_RECONNECTION_TRIES = 3;

@Injectable({
  providedIn: 'root'
})
export class ChatWebSocketService {

  private chatServerWebSocket: WebSocketSubject<ResponseMessage>;
  private chatServerWebSocketSubject: Subject<ResponseMessage>;
  private connStatusSubject: BehaviorSubject<ChatConnectionStatus>;
  private chatConnectionStatus: ChatConnectionStatus;
  private reconnectionTries = 0;

  constructor() {
    this.connStatusSubject = new BehaviorSubject<ChatConnectionStatus>(ChatConnectionStatus.OFFLINE);
    this.chatServerWebSocketSubject = new Subject<ResponseMessage>();
  }

  openWebSocketConnection(): Observable<any> {
    this.updateConnectionStatus(ChatConnectionStatus.CONNECTING);

    this.chatServerWebSocket = webSocket<ResponseMessage>({
      url: `${environment.backendUrl}`
      // protocol: ['mycookie', 'value']
    });

    this.listenWebSocketMessages();
    return this.chatServerWebSocket;
  }

  openConnection(): Observable<void> {
    return new Observable(subscriber => {
      this.openWebSocketConnection()
        .subscribe(connection => {
          subscriber.complete();
        },
            error => {
          subscriber.error('failed to open connection');
        });
    });
  }

  closeWebsocketConnection(): void {
    this.chatServerWebSocket.complete();
  }

  resetConnection(): void {
    this.closeWebsocketConnection();
    this.openWebSocketConnection();
  }

  sendWebSocketMessage(message: RequestMessage): void {
    this.chatServerWebSocket.next(message);
  }

  sendWebsocketMessage(message: RequestMessage): Observable<RequestMessage> {
    return new Observable(subscriber => {
      if (this.chatConnectionStatus !== ChatConnectionStatus.ONLINE) {
        this.reconnectionTries = 0;
        this.tryReconnectWebSocketConnection();
        subscriber.error(new Error('Connection is closed.'));
      } else {
        this.chatServerWebSocket.next(message);
        subscriber.next(message);
        subscriber.complete();
      }
    });
  }

  getWebSocketObservable(): Observable<ResponseMessage> {
    return this.chatServerWebSocketSubject;
  }

  getConnectionStatusSubject(): Observable<ChatConnectionStatus> {
    return this.connStatusSubject;
  }

  private listenWebSocketMessages(): void {
    this.chatServerWebSocket
      .subscribe((responseMessage) => {
        this.chatServerWebSocketSubject.next(responseMessage);
        this.updateConnectionStatus(ChatConnectionStatus.ONLINE);
        // },
        // () => ''//this.tryReconnectWebSocketConnection()
      });
  }

  private monitorConnection(): void {
    interval(30000)
      .subscribe(val => {
        if (this.chatConnectionStatus === ChatConnectionStatus.OFFLINE) {
          console.error('trying to reconnect');
          this.reconnect();
        } else {
          this.chatServerWebSocket.next(pingMessage);
        }
      });
  }

  private tryReconnectWebSocketConnection(): void {
    this.updateConnectionStatus(ChatConnectionStatus.OFFLINE);
    if (this.reconnectionTries < MAX_RECONNECTION_TRIES) {
      this.reconnectionTries = this.reconnectionTries + 1;
      console.error(`trying to reconnect (${this.reconnectionTries}/${MAX_RECONNECTION_TRIES})`);
      this.reconnect();
    }
  }

  private reconnect(): void {
    this.updateConnectionStatus(ChatConnectionStatus.RECONNECTING);
    this.resetConnection();
  }

  private updateConnectionStatus(status: ChatConnectionStatus): void {
    if (status === ChatConnectionStatus.OFFLINE) {
      this.reconnectionTries = 0;
    }
    this.chatConnectionStatus = status;
    this.connStatusSubject.next(this.chatConnectionStatus);
  }

}
