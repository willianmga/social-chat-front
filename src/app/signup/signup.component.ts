import {Component, OnInit} from '@angular/core';
import {AppComponent} from '../app.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private appComponent: AppComponent, private router: Router) { }

  ngOnInit(): void {
  }

  signup(name: string, username: string): void {
    this.appComponent.signup(name, username);
  }

  login(): void {
    this.router.navigate(['/login']);
  }

}
