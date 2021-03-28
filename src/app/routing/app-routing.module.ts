import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {SignupComponent} from '../signup/signup.component';
import {AuthGuardService} from '../guard/auth-guard.service';
import {ChatMobileComponent} from '../chat-mobile/chat-mobile.component';
import {LoggedInGuardService} from '../guard/loggedIn-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/chat', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [LoggedInGuardService] },
  { path: 'signup', component: SignupComponent, canActivate: [LoggedInGuardService] },
  { path: 'chat', component: ChatMobileComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
