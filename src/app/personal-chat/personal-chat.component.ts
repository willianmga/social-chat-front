import { Component, ViewChild, OnInit } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { send } from 'process';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-personal-chat',
  templateUrl: './personal-chat.component.html',
  styleUrls: ['./personal-chat.component.css']
})
export class PersonalChatComponent implements OnInit {

  selectedContact: any;
  contacts: Array<any>;
  loggedInUser: any;

  @ViewChild('messageinput') messageinput: MatInput;

  constructor(private chatService: ChatService) { 

  }

  ngOnInit(): void {

    this.chatService.loggedInUserSubject
      .subscribe((user) => {
        this.loggedInUser = user;
      });    

    this.chatService
      .getContacts()
      .subscribe((response) => {
        this.contacts = response;
        this.openContact(this.contacts[0]);
      });

    this.chatService.messagesSubject.subscribe((message) => {
        this.notifyReceivedMessage(message);
    });

  }

  notifyReceivedMessage(message: any): void {
    this.addMessageToHistory(
      () => this.findMessageDestinationContact(message),
      message
    );
  }

  notifySentMessage(message: any): void {
    this.addMessageToHistory(
      () => this.findMessageDestinationContact(message),
      message
    );
  }

  findMessageDestinationContact(message: any): any {
    return (message.destination.destinationType == "USER")
      ? this.findContact(message.from)
      : this.findContact(message.destination.destinationId);
  }

  findMessageSenderContact(message: any): any {
    return (message.from == this.loggedInUser.id)
      ? this.loggedInUser
      : this.findContact(message.from);
  }

  findContact(contactId: String): any {
    return this.contacts.filter(contact => contact.id == contactId)[0];
  }

  addMessageToHistory(findDestinationContactFunction: any, message: any): void {
    const destinationContact = findDestinationContactFunction();
    destinationContact.chatHistory.push(message);
  }

  sendMessage(message: string): void {
    const sentMessage = this.chatService.sendMessage(message, this.selectedContact);
    this.notifySentMessage(sentMessage);
    this.messageinput.value = "";
  }

  isReceivedMessage(message: any): boolean {
    return message.from !== this.loggedInUser.id;
  }

  isGroupMessage(message: any): boolean {
    return message.destinationType != "USER";
  }

  getSenderName(message: any): String {
    const senderContact = this.findMessageSenderContact(message);

    if (senderContact !== undefined) {
      return (senderContact.id == this.loggedInUser.id)
        ? "You"
        : senderContact.name;
    }

    return "";
  }

  openContact(contact: any): void {
    this.selectedContact = contact;
  }

}
