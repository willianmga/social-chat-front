import { Injectable } from '@angular/core';
import {ChatMessage, Contact} from '../chat-web-socket.service';
import {Observable, Subject} from 'rxjs';

export enum NotificationType {
  NEW_MESSAGE = 'NEW_MESSAGE',
  NEW_CONTACT = 'NEW_CONTACT'
}

export interface Notification {
  referenceId: string;
  message: string;
  avatar?: string;
  read: boolean;
  type: NotificationType;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private notificationsSubject: Subject<Notification>;

  constructor() {
    this.notificationsSubject = new Subject<Notification>();
  }

  newContact(contact: Contact): void {
    this.notificationsSubject
      .next({
        referenceId: contact.id,
        message: `${contact.name} has joined SocialChat!`,
        avatar: contact.avatar,
        type: NotificationType.NEW_CONTACT,
        read: false
      });
  }

  newMessage(message: ChatMessage): void {
    this.notificationsSubject
      .next({
        referenceId: message.id,
        message: `New Message: ${message.content}`,
        type: NotificationType.NEW_MESSAGE,
        read: false
      });
  }

  getNotificationsSubject(): Observable<Notification> {
    return this.notificationsSubject;
  }

}
