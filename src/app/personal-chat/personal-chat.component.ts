import { Component, OnInit } from '@angular/core';
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

  constructor(private chatService: ChatService) { 

  }

  ngOnInit(): void {

    this.chatService.getLoggedInUser()
      .subscribe(user => {
        this.loggedInUser = user;
      });    

    this.chatService
      .getContacts()
      .subscribe((response) => {
        this.contacts = response;
        this.selectedContact = this.contacts[0];
      });

    this.chatService.messagesSubject.subscribe((message) => {
        this.notifyReceivedMessage(message);
    });

  }

  notifyReceivedMessage(message: any): void {

    this.addMessageToHistory(
      () => this.contacts.filter(contact => contact.id === message.from)[0],
      message
    );

  }

  notifySentMessage(message: any): void {

    this.addMessageToHistory(
      () => this.contacts.filter(contact => contact.id === message.destination.destinationId)[0],
      message
    );

  }

  addMessageToHistory(findDestinationContactFunction: any, message: any): void {

    const destinationContact = findDestinationContactFunction();
    
    destinationContact.chatHistory.push(message);
  }

  sendMessage(message: string): void {
    const sentMessage = this.chatService.sendMessage(message, this.selectedContact);
    this.notifySentMessage(sentMessage);
  }

  receivedMessage(message: any): boolean {
    return message.from === this.selectedContact.id;
  }

  openContact(contact: any): void {
    this.selectedContact = contact;
  }

}
