import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {WebSocketChatServerService, Contact, MessageType, RequestMessage} from './web-socket-chat-server.service';
import {SessionService} from './session.service';
import {NotificationService} from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contactsSubject: Subject<Array<Contact>> = new Subject<Array<Contact>>();
  private newContactSubject: Subject<Contact> = new Subject<Contact>();

  constructor(private chatService: WebSocketChatServerService,
              private sessionService: SessionService,
              private notificationService: NotificationService) {
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
          const contact = this.formatContact(messagePayload);
          this.notificationService.newContact(contact);
          this.newContactSubject.next(contact);
        }
      });
  }

  requestContacts(): Observable<Array<Contact>> {
    this.chatService
      .sendWebSocketMessage({
        type: MessageType.CONTACTS_LIST
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
    contact.chatHistoryLoaded = false;

    try {

      const splitName = contact.name.split(' ');
      contact.name = (splitName.length > 1)
        ? `${this.capitalize(splitName[0])} ${this.capitalize(splitName[splitName.length - 1])}`
        : `${this.capitalize(splitName[0])}`;
      return contact;

    } catch (e) {
      return contact;
    }
  }

  private capitalize(data: string): string {
    return data.charAt(0).toUpperCase() + data.slice(1);
  }

}
