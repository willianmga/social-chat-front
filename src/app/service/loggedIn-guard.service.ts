import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {ChatService} from '../chat.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuardService implements CanActivate {

  constructor(private chatService: ChatService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return new Observable<boolean>(observer => {
      if (this.chatService.isLoggedIn()) {
        this.router.navigateByUrl('/chat');
        observer.next(false);
      } else {
        observer.next(true);
      }
      observer.complete();
    });
  }

}
