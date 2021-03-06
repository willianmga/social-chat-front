import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {PersonalChatComponent} from './personal-chat/personal-chat.component';
import {SignupComponent} from './signup/signup.component';
import {AuthGuardService} from './service/auth-guard.service';
import {ChatMobileComponent} from './chat-mobile/chat-mobile.component';

const routes: Routes = [
  { path: '', redirectTo: '/chat', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
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
