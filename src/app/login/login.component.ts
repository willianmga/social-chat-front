import { Component, OnInit } from '@angular/core';
import { ChatService, LoginRequest } from '../chat.service';
import {AppComponent} from '../app.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  loggingIn = false;

  constructor(private chatService: ChatService, private router: Router, private appComponent: AppComponent) { }

  ngOnInit(): void {
  }

  login(username: string, password: string): void {

    this.loggingIn = true;

    const loginRequest: LoginRequest = {
      username,
      password
    };

    this.appComponent.login(loginRequest);
  }

  signup(): void {
    this.router.navigate(['/signup']);
  }

}
