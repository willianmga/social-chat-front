import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {
  ChatConnectionStatus,
  ChatHistoryResponse,
  ChatMessage,
  ChatWebSocketService,
  Contact,
  DestinationType,
  MOBILE_MAX_WIDTH,
  SessionDetails
} from '../chat-web-socket.service';
import {Howl} from 'howler';
import {ContactService} from '../service/contact.service';
import {ChatMessageService} from '../service/chat-message.service';
import {SessionService} from '../service/session.service';

@Component({
  selector: 'app-chat-mobile',
  templateUrl: './chat-mobile.component.html',
  styleUrls: ['./chat-mobile.component.css']
})
export class ChatMobileComponent implements OnInit {

  connectionStatus: ChatConnectionStatus;
  mobileMode: boolean;
  dataLoadFinished: boolean;
  needsDataReload = false;
  listMode: boolean;
  sessionDetails: SessionDetails;
  selectedContact: Contact;
  contacts: Array<Contact> = [];
  private player: Howl;

  @ViewChild('messageinput') messageinput;
  @ViewChild('chatHistoryContainer') private chatHistoryContainer: ElementRef;

  constructor(private chatService: ChatWebSocketService,
              private sessionService: SessionService,
              private contactService: ContactService,
              private chatMessageService: ChatMessageService,
              private _snackBar: MatSnackBar) {
    this.dataLoadFinished = false;
    this.listMode = true;
    this.player = new Howl({
      src: ['assets/notification.mp3']
    });
  }

  ngOnInit(): void {
    this.checkMobileMode();
    this.loadChatData();
  }

  private loadChatData(): void {

    this.chatService
      .getConnectionStatusSubject()
      .subscribe(status => {
        this.connectionStatus = status;
        this.dataLoadFinished = true;

        if (this.connectionStatus === ChatConnectionStatus.ONLINE && this.needsDataReload) {
          this.needsDataReload = false;
          this.loadChatData();
        } else if (this.connectionStatus === ChatConnectionStatus.OFFLINE) {
          this.needsDataReload = true;
        }
      });

    this.sessionService
      .getSessionDetailsObservable()
      .subscribe((sessionDetails) => {
        this.sessionDetails = sessionDetails;
      });

    this.contactService
      .requestContacts()
      .subscribe((response) => {
        this.contacts = response;
      });

    this.contactService
      .newContactObservable()
      .subscribe(newContact => {
        this.contacts.push(newContact);
      });

    this.chatMessageService
      .getMessagesObservable()
      .subscribe((message) => {
        this.notifyReceivedMessage(message);
      });

    this.chatMessageService
      .getChatHistoryObservable()
      .subscribe(chatHistoryResponse => {
        this.notifyReceivedChatHistory(chatHistoryResponse);
      });

  }

  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    this.checkMobileMode();
  }

  notifyReceivedChatHistory(chatHistory: ChatHistoryResponse): void {
    this.mergeChatHistoryToHistory(
      () => this.findContact(chatHistory.destinationId),
      chatHistory
    );
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
      ? this.findContact(this.sessionDetails?.loggedInUser?.id)
      : this.findContact(message?.from);
  }

  findContact(contactId: string): Contact {
    return this.contacts.filter(contact => contact.id === contactId)[0];
  }

  addMessageToHistory(findDestinationContactFunction: any, message: ChatMessage): void {
    const destinationContact: Contact = findDestinationContactFunction();
    destinationContact.chatHistory.push(message);
  }

  mergeChatHistoryToHistory(findDestinationContactFunction: any, chatHistory: ChatHistoryResponse): void {
    const destinationContact: Contact = findDestinationContactFunction();
    destinationContact.chatHistory = chatHistory.chatHistory;
  }

  /* View Methods  */

  sendMessage(message: string): void {
    if (message !== undefined && message.trim() !== '') {
      this.chatMessageService
        .sendMessage(message, this.selectedContact)
        .subscribe(requestMessage => {
          this.notifySentMessage(requestMessage.payload);
          this.messageinput.nativeElement.value = '';
          this.messageinput.nativeElement.focus();
        }, error => {
          this._snackBar.open('You are offline. Your message was not sent.', 'ok', {
            duration: 3000,
            verticalPosition: 'top'
          });
        });
    }
  }

  openContact(contact: Contact): void {
    this.chatMessageService.requestChatHistory(contact);
    this.selectContact(contact);
    this.listMode = false;
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

    return (senderContact !== undefined)
      ? senderContact.name
      : (message?.from === this.sessionDetails?.loggedInUser?.id)
        ? this.sessionDetails?.loggedInUser?.name
        : '';

  }

  getSenderAvatar(message: ChatMessage): string {

    const senderContact: Contact = this.findMessageSenderContact(message);

    return (senderContact !== undefined)
      ? senderContact?.avatar
      : (message.from === this.sessionDetails?.loggedInUser?.id)
        ? this.sessionDetails?.loggedInUser?.avatar
        : '';

  }

  // TODO: find proper last message received
  getLastReceivedMessage(contact: Contact): string {
    return contact.chatHistory[contact.chatHistory.length - 1]?.content;
  }

  // TODO: find whether there's unread message properly
  hasUnreadMessage(contact: Contact): boolean {
    return contact.chatHistory.length > 0;
  }

  showContactsList(): boolean {
    return (this.mobileMode)
      ? this.listMode
      : true;
  }

  showMessageHistory(): boolean {
    return (this.mobileMode)
      ? !this.listMode
      : this.selectedContact !== undefined;
  }

  loadIsFinished(): boolean {
    return (this.connectionStatus === ChatConnectionStatus.ONLINE)
      ? this.dataLoadFinished
      : true;
  }

  connectionStatusLabelColor(): string {
    switch (this.connectionStatus) {
      case ChatConnectionStatus.ONLINE:
        return 'green';
      case ChatConnectionStatus.OFFLINE:
        return 'red';
      default:
        return 'white';
    }
  }

  private checkMobileMode(): void {
    this.mobileMode = window.innerWidth <= MOBILE_MAX_WIDTH;
  }

}
