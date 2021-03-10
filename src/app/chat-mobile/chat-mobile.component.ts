import {AfterViewChecked, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ChatMessage, ChatService, Contact, DestinationType, SessionDetails} from '../chat.service';
import {AppComponent} from '../app.component';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-chat-mobile',
  templateUrl: './chat-mobile.component.html',
  styleUrls: ['./chat-mobile.component.css']
})
export class ChatMobileComponent implements OnInit {

  dataLoadFinished: boolean;
  listMode = true;
  sessionDetails: SessionDetails;
  selectedContact: Contact;
  contacts: Array<Contact> = [];
  private player: Howl;

  @ViewChild('messageinput') messageinput;
  @ViewChild('chatHistoryContainer') private chatHistoryContainer: ElementRef;

  constructor(private chatService: ChatService, private appComponent: AppComponent) {
    this.player = new Howl({
      src: ['assets/notification.mp3']
    });
  }

  ngOnInit(): void {
    this.chatService
      .getSessionDetailsObservable()
      .subscribe((sessionDetails) => {
        this.sessionDetails = sessionDetails;
      });

    this.chatService
      .requestContacts()
      .subscribe((response) => {
        response.forEach(contact => this.contacts.push(contact));
        this.selectContact(this.contacts[0]);
      });

    this.chatService
      .getMessagesObservable()
      .subscribe((message) => {
        this.notifyReceivedMessage(message);
      });

    this.dataLoadFinished = true;

  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  notifyReceivedMessage(message: ChatMessage): void {
    this.addMessageToHistory(
      () => this.findMessageDestinationContact(message),
      message
    );
    this.player.play();
  }

  notifySentMessage(message: ChatMessage): void {
    this.addMessageToHistory(
      () => this.findContact(message.destinationId),
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

  /* View Methods  */

  sendMessage(message: string): void {
    if (message !== undefined && message !== '') {
      const sentMessage: ChatMessage = this.chatService.sendMessage(message, this.selectedContact);
      this.notifySentMessage(sentMessage);
      this.messageinput.nativeElement.value = '';
      this.messageinput.nativeElement.focus();
      this.scrollToBottom();
    }
  }

  openContact(contact: Contact): void {
    this.selectContact(contact);
    this.listMode = false;
    console.log(this.listMode);
  }

  selectContact(contact: Contact): void {
    this.selectedContact = contact;
  }

  closeContact(): void {
    this.listMode = true;
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

  // TODO: find proper last message received
  getLastReceivedMessage(contact: Contact): string {
    return contact.chatHistory[contact.chatHistory.length - 1]?.message;
  }

  // TODO: find whether there's unread message properly
  hasUnreadMessage(contact: Contact): boolean {
    return contact.chatHistory.length > 0;
  }

  scrollToBottom(): void {
    try {
      this.chatHistoryContainer.nativeElement.scrollTop = this.chatHistoryContainer.nativeElement.scrollHeight;
    } catch (err) {}
  }

}
