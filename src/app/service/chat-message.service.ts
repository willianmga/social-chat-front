import { Injectable } from '@angular/core';
import {
  ChatHistoryRequest,
  ChatHistoryResponse,
  ChatMessage,
  ChatWebSocketService,
  Contact,
  ContactType,
  DestinationType,
  MessageType, MimeType,
  RequestMessage
} from '../chat-web-socket.service';
import {Observable, Subject} from 'rxjs';
import {SessionService} from './session.service';

@Injectable({
  providedIn: 'root'
})
export class ChatMessageService {

  private messagesSubject: Subject<ChatMessage> = new Subject<ChatMessage>();
  private chatHistorySubject: Subject<ChatHistoryResponse> = new Subject<ChatHistoryResponse>();

  constructor(private chatService: ChatWebSocketService,
              private sessionService: SessionService) {
    this.subscribe();
  }

  private subscribe(): void {
    this.chatService
      .getWebSocketObservable()
      .subscribe(responseMessage => {
        const messagePayload = responseMessage.payload;
        if (responseMessage.type === MessageType.USER_MESSAGE) {
          this.messagesSubject.next(messagePayload);
        } else if (responseMessage.type === MessageType.CHAT_HISTORY) {
          this.chatHistorySubject.next(messagePayload);
        }
      });
  }

  sendMessage(message: string, destinationContact: Contact): Observable<RequestMessage> {

    const destinationType = (destinationContact.contactType === ContactType.USER)
      ? DestinationType.USER
      : DestinationType.ALL_USERS_GROUP;

    const session = this.sessionService
      .getSessionDetails();

    const chatMessage: ChatMessage = {
      from: session.loggedInUser.id,
      destinationType,
      destinationId: destinationContact.id,
      content: message,
      mimeType: MimeType.TEXT,
      date: new Date()
    };

    const newMessage: RequestMessage = {
      type: MessageType.USER_MESSAGE,
      token: session.token,
      payload: chatMessage
    };

    return this.chatService
      .sendWebsocketMessage(newMessage);
  }

  requestChatHistory(destinationContact: Contact): void {

    const chatHistoryRequest: ChatHistoryRequest = {
      destinationId: destinationContact.id
    };

    if (destinationContact.chatHistory.length > 0) {
      chatHistoryRequest.lastMessageId = destinationContact?.chatHistory[0]?.id;
    }

    const request: RequestMessage = {
      type: MessageType.CHAT_HISTORY,
      token: this.sessionService.getToken(),
      payload: chatHistoryRequest
    };

    this.chatService
      .sendWebSocketMessage(request);
  }

  getMessagesObservable(): Observable<ChatMessage> {
    return this.messagesSubject;
  }

  getChatHistoryObservable(): Observable<ChatHistoryResponse> {
    return this.chatHistorySubject;
  }

}
