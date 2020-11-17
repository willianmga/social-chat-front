import { Injectable } from '@angular/core';
import { Observable, Subject, interval, throwError } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  loggedInUser: any = {
    id: "87e9d33c-c16f-4857-9274-729940c1a332",
    name: "Willian Azevedo",
    status: "Online",
    avatar: "https://media-exp1.licdn.com/dms/image/C4E03AQG6pQNBy_lPYg/profile-displayphoto-shrink_200_200/0?e=1610582400&v=beta&t=i5MYAMYlbD3vbar1QWOTIE3EBcEJ4_ukOEJkiF9X_M0"
  };

  chatServerWebSocket: WebSocketSubject<any>;
  messagesSubject: Subject<any> = new Subject<any>();
  contactsSubject: Subject<Array<any>> = new Subject<Array<any>>();

  constructor() {
    this.openConnection();
  }

  openConnection(): void {

    this.chatServerWebSocket = webSocket(`ws://localhost:8080/chat/${this.loggedInUser.id}`);

    this.chatServerWebSocket.asObservable()
      .subscribe(data => {

        if (data.payload.type === "CONTACTS_LIST") {
          this.contactsSubject.next(this.formatContacts(data.payload.content));
        }

        if (data.payload.type === "USER_MESSAGE") {
          this.messagesSubject.next(data);
        }

        console.log("message received");
        console.log(data);

      });

  }

  getContacts(): Observable<Array<any>> {
    return this.contactsSubject;
  }

  getLoggedInUser(): Observable<any> {

    const loggedInUser = this.loggedInUser;

    return Observable.create(function(observer) {
      observer.next(loggedInUser);
      observer.complete();
    });

  }

  sendMessage(message: string, destinationContact: any): any {

    const newMessage = {
      from: this.loggedInUser.id,
      destination: {
        destinationType: "USER",
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