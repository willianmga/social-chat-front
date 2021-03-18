import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {ChatWebSocketService, Contact, MessageType, RequestMessage} from '../chat-web-socket.service';
import {SessionService} from './session.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contactsSubject: Subject<Array<Contact>> = new Subject<Array<Contact>>();
  private newContactSubject: Subject<Contact> = new Subject<Contact>();

  constructor(private chatService: ChatWebSocketService,
              private sessionService: SessionService) {
    this.subscribe();
  }

  subscribe(): void {
    this.chatService
      .getWebSocketObservable()
      .subscribe(responseMessage => {
        const messagePayload = responseMessage.payload;
        if (responseMessage.type === MessageType.CONTACTS_LIST) {
          this.contactsSubject.next(this.formatContacts(messagePayload));
        } else if (responseMessage.type === MessageType.NEW_CONTACT_REGISTERED) {
          this.newContactSubject.next(this.formatContact(messagePayload));
        }
      });
  }

  requestContacts(): Observable<Array<Contact>> {
    this.chatService
      .sendWebSocketMessage({
        type: MessageType.CONTACTS_LIST,
        token: this.sessionService.getToken()
      });
    return this.contactsSubject;
  }

  newContactObservable(): Observable<Contact> {
    return this.newContactSubject;
  }

  private formatContacts(contacts: Array<Contact>): Array<Contact> {
    return contacts
      .map(contact => this.formatContact(contact));
  }

  private formatContact(contact: Contact): Contact {
    contact.chatHistory = [];
    const splitName = contact.name.split(' ');

    contact.name = (splitName.length > 1)
      ? `${this.capitalize(splitName[0])} ${this.capitalize(splitName[splitName.length - 1])}`
      : `${this.capitalize(splitName[0])}`;

    return contact;
  }

  private capitalize(data: string): string {
    return data.charAt(0).toUpperCase() + data.slice(1);
  }


}
