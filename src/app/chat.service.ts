import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, Subject, interval, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { WebSocket } from 'ws';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  loggedInUser: any = {
    id: 1,
    name: "Willian Azevedo",
    status: "Online",
    avatar: "https://media-exp1.licdn.com/dms/image/C4E03AQG6pQNBy_lPYg/profile-displayphoto-shrink_200_200/0?e=1610582400&v=beta&t=i5MYAMYlbD3vbar1QWOTIE3EBcEJ4_ukOEJkiF9X_M0"
  };

  contacts: Array<any> = [
    {
      id: 2,
      name: "Camila Vargas",
      status: "Online",
      chatHistory: [],
      avatar: "https://media-exp1.licdn.com/dms/image/C4E03AQG7LplhHkHE1g/profile-displayphoto-shrink_800_800/0?e=1610582400&v=beta&t=DH78L5LFPCuzoVFzTxf81ewt_nLn45gQth-81uOCNEg"
    },
    {
      id: 3,
      name: "Lucas Azevedo",
      status: "Away",
      chatHistory: [],
      avatar: "https://scontent-lhr8-1.xx.fbcdn.net/v/t1.0-9/124573669_2880321955530066_4246381508533868164_n.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_ohc=aRWa0eIPB8oAX_RhVlW&_nc_ht=scontent-lhr8-1.xx&oh=e9a0e34e2fff33d4411f44223e5a4296&oe=5FD1CC35"
    },
    {
      id: 4,
      name: "Marcelo Andrade",
      status: "Busy",
      chatHistory: [],
      avatar: "https://media-exp1.licdn.com/dms/image/C4E03AQGhwMEy3ZHbog/profile-displayphoto-shrink_800_800/0?e=1610582400&v=beta&t=tR1Pb4IPx-5jc6hDQrM5e-6bU4CItAfQVzJijTJHZ6w"
    }
  ];

  messages: Array<String> = [
    "hi, how are you?",
    "hey, how is it going?",
    "great stuff!",
    "not bad, how about you?"
  ];

  execChange: Subject<any> = new Subject<any>();

  constructor(private httpClient: HttpClient) {
    
    const source = interval(3000);
    source.subscribe(val => {
      this.execChange.next(this.generateRandomMessage());
    });

    webSocket({
      url: "ws://localhost:8080/chat/6fda0ae2-61de-4eb6-b323-efb17856da5e",
      closeObserver: {
        next: () => {
          console.log('[DataService]: connection closed');
        }
      }      
    });

    //new WebSocket();

      // .subscribe(response => {

      //   console.log(JSON.stringify(response));

      //   this.execChange.next(response);
      // });

  }

  getContacts(): Observable<Array<any>> {

    const contacts = this.contacts;

    return Observable.create(function(observer) {
        observer.next(contacts);
        observer.complete();
    });

  }

  getLoggedInUser(): Observable<any> {

    const loggedInUser = this.loggedInUser;

    return Observable.create(function(observer) {
      observer.next(loggedInUser);
      observer.complete();
    });

  }

  generateRandomMessage(): any {

    const contactIndex = this.getRandomInt(this.contacts.length);
    const messageIndex = this.getRandomInt(this.messages.length);

    return {
      to: this.loggedInUser,
      from: this.contacts[contactIndex],
      message: this.messages[messageIndex],
      date: new Date()
    };

  }

  getRandomInt(max) {
    const min = 0;
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
  }

}