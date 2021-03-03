import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatService, SessionDetails } from './chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  loggedInUser: any;
  sessionDetails: SessionDetails;
  availableUsers: Array<any>;
  avatar: Observable<string>;
  title = 'SocialChat';

  constructor(private chatService: ChatService) {
    this.loadSessionDetails();
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

  loadSessionDetails(): void {
    this.chatService
      .getSessionDetails()
      .subscribe(session => {
        this.sessionDetails = session;
      })
  }

  switchUser(user: any): void {
    this.chatService.switchUser(user);
    this.getAvailableUsers();
    this.getLoggedInUser();
  }

  isLoggedIn() {
    return this.sessionDetails?.loggedIn;
  }

}
