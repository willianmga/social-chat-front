import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  loggedInUser: any;
  availableUsers: Array<any>;
  avatar: Observable<string>;
  title = 'SocialChat';

  constructor(private chatService: ChatService) {
    this.getLoggedInUser();
    this.getAvailableUsers();
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

  getAvailableUsers(): void {

    this.chatService
      .getContacts()
      .subscribe(response => {
        this.availableUsers = response;
      })

  }

  switchUser(user: any): void {
    this.chatService.switchUser(user);
    this.getAvailableUsers();
    this.getLoggedInUser();
  }

}
