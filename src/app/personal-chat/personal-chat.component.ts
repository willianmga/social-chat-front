import { Component, OnInit } from '@angular/core';

import { ChatService } from '../chat.service';

@Component({
  selector: 'app-personal-chat',
  templateUrl: './personal-chat.component.html',
  styleUrls: ['./personal-chat.component.css']
})
export class PersonalChatComponent implements OnInit {

  message: any;
  contact: any = {chatHistory: []};
  contacts: Array<any>;
  chatService: ChatService;
  displayedColumns: string[] = ["message"];

  constructor(private service: ChatService) { 

    this.chatService = service;

    this.chatService.execChange.subscribe((message) => {
        this.notifyMessage(message);
    });

  }

  ngOnInit(): void {
    this.loadContacts();
  }

  notifyMessage(message: any): void {

    const contact = this.contacts.filter(contact => contact.id === message.from.id)[0];

    contact.chatHistory.push(message);
    this.message = message;
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
  }

}
