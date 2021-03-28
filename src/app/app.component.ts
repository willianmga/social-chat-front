import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {WebSocketChatServerService, SessionDetails, ResponseStatus} from './service/web-socket-chat-server.service';
import {SystemInfoComponent} from './system-info/system-info.component';
import {SessionService} from './service/session.service';
import {NotificationService, Notification} from './service/notification.service';
import {LoginService} from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'SocialChat';
  sessionDetails: SessionDetails;
  notifications: Array<Notification> = [];

  constructor(private router: Router,
              private chatService: WebSocketChatServerService,
              private sessionService: SessionService,
              private loginService: LoginService,
              private notificationService: NotificationService,
              private systemInfoDialog: MatDialog) {
    this.loadData();
  }

  loadData(): void {
    this.sessionService
      .getSessionDetailsObservable()
      .subscribe(sessionDetails => {
        this.sessionDetails = sessionDetails;
      });

    this.notificationService
      .getNotificationsSubject()
      .subscribe(newNotification => {
        const unreadNotifications = this.notifications
          .filter(notification => !notification.read);
        unreadNotifications.push(newNotification);
        this.notifications = unreadNotifications;
      });
  }

  logout(): void {
    this.loginService.logoff()
      .subscribe(serverResponse => {
        if (serverResponse.status === ResponseStatus.SUCCESS) {
          this.router.navigate(['/login']);
          this.sessionService.logoff();
        }
      });
  }

  showSystemInfo(): void {
    this.systemInfoDialog.open(SystemInfoComponent);
  }

  isLoggedIn(): boolean {
    return this.sessionDetails?.loggedIn;
  }

  hasUnreadNotifications(): boolean {
    return this.notifications
      .filter(notification => !notification.read)
      .length > 0;
  }

}
