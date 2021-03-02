import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { PersonalChatComponent } from './personal-chat/personal-chat.component';

const routes: Routes = [
  { path: '', component: PersonalChatComponent },
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
