import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {ChatWebSocketService, SessionDetails} from './chat-web-socket.service';
import {SystemInfoComponent} from './system-info/system-info.component';
import {SessionService} from './service/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'SocialChat';
  sessionDetails: SessionDetails;

  constructor(private router: Router,
              private chatService: ChatWebSocketService,
              private sessionService: SessionService,
              private systemInfoDialog: MatDialog) {
    this.loadSession();
  }

  loadSession(): void {
    this.sessionService
      .getSessionDetailsObservable()
      .subscribe(sessionDetails => {
        this.sessionDetails = sessionDetails;
      });
  }

  logout(): void {
    this.sessionService.logoff();
    this.router.navigate(['/login']);
  }

  showSystemInfo(): void {
    this.systemInfoDialog.open(SystemInfoComponent);
  }

  isLoggedIn(): boolean {
    return this.sessionDetails?.loggedIn;
  }

}
