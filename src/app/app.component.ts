import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {ChatService, SessionDetails} from './chat.service';
import {SystemInfoComponent} from './system-info/system-info.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'SocialChat';
  sessionDetails: SessionDetails;


  constructor(private chatService: ChatService, private router: Router, private systemInfoDialog: MatDialog) {
    this.loadSession();
  }

  loadSession(): void {
    this.chatService
      .getSessionDetailsObservable()
      .subscribe(sessionDetails => {
        this.sessionDetails = sessionDetails;
      });
  }

  logout(): void {
    this.chatService.logoff();
    this.router.navigate(['/login']);
  }

  showSystemInfo(): void {
    this.systemInfoDialog.open(SystemInfoComponent);
  }

  isLoggedIn(): boolean {
    return this.sessionDetails?.loggedIn;
  }

}
