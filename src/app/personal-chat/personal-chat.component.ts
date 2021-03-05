import {Component, OnInit, ViewChild} from '@angular/core';
import {MatInput} from '@angular/material/input';
import {ChatMessage, ChatService, Contact, DestinationType, SessionDetails, User} from '../chat.service';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-personal-chat',
  templateUrl: './personal-chat.component.html',
  styleUrls: ['./personal-chat.component.css']
})
export class PersonalChatComponent implements OnInit {

  sessionDetails: SessionDetails;
  selectedContact: Contact;
  contacts: Array<Contact> = [];

  @ViewChild('messageinput') messageinput: MatInput;
  constructor(private chatService: ChatService, private appComponent: AppComponent) {}

  ngOnInit(): void {

    this.appComponent
      .checkValidSession()
      .subscribe(() => {

        this.chatService
          .getSessionDetailsObservable()
          .subscribe((session) => {
            this.sessionDetails = session;
          });

        this.chatService
          .requestContacts()
          .subscribe((response) => {
            response.forEach(contact => this.contacts.push(contact));
            this.openContact(this.contacts[0]);
          });

        this.chatService.messagesSubject.subscribe((message) => {
          this.notifyReceivedMessage(message);
        });

      });

  }

  notifyReceivedMessage(message: ChatMessage): void {
    this.addMessageToHistory(
      () => this.findMessageDestinationContact(message),
      message
    );
  }

  notifySentMessage(message: ChatMessage): void {
    this.addMessageToHistory(
      () => this.findMessageDestinationContact(message),
      message
    );
  }

  findMessageDestinationContact(message: ChatMessage): Contact {
    return (message.destinationType === DestinationType.USER)
      ? this.findContact(message.from)
      : this.findContact(message.destinationId);
  }

  findMessageSenderContact(message: ChatMessage): Contact {
    return (message.from === this.sessionDetails?.loggedInUser?.id)
      ? this.sessionDetails?.loggedInUser?.id
      : this.findContact(message.from);
  }

  findContact(contactId: string): Contact {
    return this.contacts.filter(contact => contact.id === contactId)[0];
  }

  addMessageToHistory(findDestinationContactFunction: any, message: ChatMessage): void {
    const destinationContact: Contact = findDestinationContactFunction();
    destinationContact.chatHistory.push(message);
  }

  sendMessage(message: string): void {
    const sentMessage: ChatMessage = this.chatService.sendMessage(message, this.selectedContact);
    this.notifySentMessage(sentMessage);
    this.messageinput.value = '';
  }

  isReceivedMessage(message: ChatMessage): boolean {
    return message.from !== this.sessionDetails?.loggedInUser?.id;
  }

  isGroupMessage(message: ChatMessage): boolean {
    return message.destinationType !== DestinationType.USER;
  }

  getSenderName(message: ChatMessage): string {
    const senderContact: Contact = this.findMessageSenderContact(message);

    if (senderContact !== undefined) {
      return (senderContact.id === this.sessionDetails?.loggedInUser?.id)
        ? 'You'
        : senderContact.name;
    }

    return '';
  }

  openContact(contact: Contact): void {
    this.selectedContact = contact;
  }

}
