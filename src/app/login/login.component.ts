import { Component, OnInit } from '@angular/core';
import { ChatService, LoginRequest } from '../chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
  }

  login(username: String, password: String): void {
    
    const loginRequest: LoginRequest = {
      username: username,
      passowrd: password
    }

    this.chatService
      .login(loginRequest)
      .subscribe(loginResponse => {

        console.log("user logged in");
        console.log(loginResponse);

      });
    
  }

}
