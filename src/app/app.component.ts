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

  sessionDetails: SessionDetails;
  title = 'SocialChat';

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

  navigateToPage(page: string): void {
    setTimeout(
      () => this.router.navigate([page]),
      3000
    );
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

  private registerSession(sessionDetails: SessionDetails): void {
    this.chatService.registerSession(sessionDetails);
    this.chatService
      .getSessionDetailsObservable()
      .toPromise()
      .then(sessionDetails => {
        this.sessionDetails = sessionDetails;
        this.navigateToPage('/chat');
      });
  }

}
