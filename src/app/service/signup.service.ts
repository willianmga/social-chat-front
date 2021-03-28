import {Injectable} from '@angular/core';
import {WebSocketChatServerService, MessageType, SignupResponse} from './web-socket-chat-server.service';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private signupSubject: Subject<SignupResponse> = new Subject();

  constructor(private chatService: WebSocketChatServerService) {
    this.subscribe();
  }

  private subscribe(): void {
    this.chatService
      .getWebSocketObservable()
      .subscribe(responseMessage => {
        const messagePayload = responseMessage.payload;
        if (responseMessage.type === MessageType.SIGNUP) {
          this.signupSubject.next(messagePayload);
        }
      });
  }

  signup(name: string, username: string, password: string): Observable<SignupResponse> {

    this.chatService
      .sendWebSocketMessage({
        type: MessageType.SIGNUP,
        payload: {
          name,
          username,
          password
        }
    });

    return this.signupSubject;
  }

}
