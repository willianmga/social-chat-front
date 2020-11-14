import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { ChatService } from './chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  message: any;
  loggedInUser: any;
  avatar: Observable<string>;
  title = 'SocialChat';

  constructor(private chatService: ChatService) {

    this.chatService.execChange.subscribe((response) => {
      this.message = response;
    });

    this.getLoggedInUser();

  }

  getLoggedInUser(): void {
    this.chatService
      .getLoggedInUser()
      .subscribe((response) => {
        
        this.avatar = Observable.create(observer => {
          observer.next(response.avatar);
          observer.complete();
        })

        this.loggedInUser = response;
      })
  }

}
