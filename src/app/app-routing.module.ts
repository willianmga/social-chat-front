import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from './login/login.component';

import { PersonalChatComponent } from './personal-chat/personal-chat.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: PersonalChatComponent },
  { path: 'chat', component: PersonalChatComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
