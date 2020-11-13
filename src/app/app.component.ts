import { Component } from '@angular/core';

import { ChatService } from './chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  chatService: ChatService;
  message: any;
  loggedInUser: any;
  title = 'SocialChat';

  constructor(private service: ChatService) {

    this.chatService = service;

    this.chatService.execChange.subscribe((response) => {
      this.message = response;
    });

    this.getLoggedInUser();

  }

  getLoggedInUser(): void {
    this.chatService
      .getLoggedInUser()
      .subscribe((response) => {
        this.loggedInUser = response;
      })
  }

}
