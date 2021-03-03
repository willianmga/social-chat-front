import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject, interval, throwError } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  loggedInUser: any = {
    id: "87e9d33c-c16f-4857-9274-729940c1a332",
    name: "Willian Azevedo",
    description: "Hi, I'm using SocialChat!",
    contactType: "USER",
    avatar: "data:image/jpeg;base64,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"
  };

  chatServerWebSocket: WebSocketSubject<any>;
  loggedInUserSubject: BehaviorSubject<any> = new BehaviorSubject<any>({});
  messagesSubject: Subject<any> = new Subject<any>();
  contactsSubject: Subject<Array<any>> = new Subject<Array<any>>();
  
  constructor() {
    this.openConnection();
  }

  openConnection(): void {

    this.loggedInUserSubject.next(this.loggedInUser);

    this.chatServerWebSocket = webSocket(`${environment.backendUrl}/${this.loggedInUser.id}`);

    this.chatServerWebSocket.asObservable()
      .subscribe(data => {

        if (data.payload.type === "CONTACTS_LIST") {
          this.contactsSubject.next(this.formatContacts(data.payload.content));
        }

        if (data.payload.type === "USER_MESSAGE") {
          this.messagesSubject.next(data);
        }

      });

  }

  closeWebsocketConnection(): void {
    this.chatServerWebSocket.unsubscribe();
  }

  getContacts(): Observable<Array<any>> {
    return this.contactsSubject;
  }

  getLoggedInUser(): Observable<any> {
    return this.loggedInUserSubject;
  }

  sendMessage(message: string, destinationContact: any): any {

    const destinationType = (destinationContact.contactType == "USER")
      ? "USER"
      : "ALL_USERS_GROUP";

    const newMessage = {
      from: this.loggedInUser.id,
      destination: {
        destinationType: destinationType,
        destinationId: destinationContact.id
      },
      payload: {
        type: "USER_MESSAGE",
        content: message
      }
    }

    this.chatServerWebSocket.next(newMessage);

    return newMessage;
  }

  switchUser(user: any): void {
    this.loggedInUser = user;
    this.closeWebsocketConnection();
    this.openConnection();
  }

  private formatContacts(contacts: Array<any>): Array<any> {
    return contacts
      .map(contact => {
        contact.chatHistory = [];
        return contact;
      })
  }

}