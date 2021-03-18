import {Injectable} from '@angular/core';
import {ChatWebSocketService, LoginRequest, LoginResponse, MessageType} from '../chat-web-socket.service';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginSubject: Subject<LoginResponse> = new Subject();

  constructor(private chatService: ChatWebSocketService,
              private httpClient: HttpClient) {
    this.subscribe();
  }

  private subscribe(): void {
    this.chatService
      .getWebSocketObservable()
      .subscribe(responseMessage => {
        const messagePayload = responseMessage.payload;
        if (responseMessage.type === MessageType.AUTHENTICATE) {
          this.loginSubject.next(messagePayload);
        }
      });
  }

  login(loginRequest: LoginRequest): Observable<LoginResponse> {

    this.chatService
      .sendWebSocketMessage({
        type: MessageType.AUTHENTICATE,
        payload: loginRequest
      });

    return this.loginSubject;
  }

  getIp(): Observable<any> {
    return this.httpClient.get('http://api.ipify.org/?format=json');
  }

}
