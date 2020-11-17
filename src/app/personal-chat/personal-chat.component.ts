import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { ChatService } from '../chat.service';

@Component({
  selector: 'app-personal-chat',
  templateUrl: './personal-chat.component.html',
  styleUrls: ['./personal-chat.component.css']
})
export class PersonalChatComponent implements OnInit {

  displayedColumns: string[] = ["message"];
  messagesDataSource = new MatTableDataSource<any>([]);

  contact: any;
  contacts: Array<any>;
  loggedInUser: any;

  constructor(private chatService: ChatService) { 

    this.chatService.messagesSubject.subscribe((message) => {
        this.notifyReceivedMessage(message);
    });

    this.chatService.getLoggedInUser().subscribe(user => {
        this.loggedInUser = user;
    });

  }

  ngOnInit(): void {
    this.loadContacts();
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

    if (destinationContact.id === this.contact.id) {
      this.refreshMessages(); 
    }

  }

  sendMessage(message: string): void {
    const sentMessage = this.chatService.sendMessage(message, this.contact);
    this.notifySentMessage(sentMessage);
  }

  receivedMessage(message: any): boolean {
    return message.from === this.contact.id;
  }

  loadContacts(): void {
    this.chatService
      .getContacts()
      .subscribe((response) => {
        this.contacts = response;
        this.contact = this.contacts[0];
      });
  }

  openContact(contact: any): void {
    this.contact = contact;
    this.refreshMessages();
  }

  refreshMessages(): void {
    this.messagesDataSource.data = this.contact.chatHistory;
  }

}
