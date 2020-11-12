import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-chat',
  templateUrl: './personal-chat.component.html',
  styleUrls: ['./personal-chat.component.css']
})
export class PersonalChatComponent implements OnInit {

  contacts: Array<any> = [
    {
      name: "Willian Azevedo",
      status: "Online",
      avatar: "https://media-exp1.licdn.com/dms/image/C4E03AQG6pQNBy_lPYg/profile-displayphoto-shrink_200_200/0?e=1610582400&v=beta&t=i5MYAMYlbD3vbar1QWOTIE3EBcEJ4_ukOEJkiF9X_M0"
    },
    {
      name: "Camila Vargas",
      status: "Online",
      avatar: "https://media-exp1.licdn.com/dms/image/C4E03AQG7LplhHkHE1g/profile-displayphoto-shrink_800_800/0?e=1610582400&v=beta&t=DH78L5LFPCuzoVFzTxf81ewt_nLn45gQth-81uOCNEg"
    },
    {
      name: "Lucas Azevedo",
      status: "Away",
      avatar: "https://scontent-lhr8-1.xx.fbcdn.net/v/t1.0-9/124573669_2880321955530066_4246381508533868164_n.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_ohc=aRWa0eIPB8oAX_RhVlW&_nc_ht=scontent-lhr8-1.xx&oh=e9a0e34e2fff33d4411f44223e5a4296&oe=5FD1CC35"
    },
    {
      name: "Marcelo Andrade",
      status: "Busy",
      avatar: "https://media-exp1.licdn.com/dms/image/C4E03AQGhwMEy3ZHbog/profile-displayphoto-shrink_800_800/0?e=1610582400&v=beta&t=tR1Pb4IPx-5jc6hDQrM5e-6bU4CItAfQVzJijTJHZ6w"
    }
  ];

  contact: any = this.contacts[0];

  constructor() { }

  ngOnInit(): void {
  }

  openContact(contact: any): void {
    this.contact = contact;
  }

}
