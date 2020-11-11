import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { DashboardComponent } from './dashboard/dashboard.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { PersonalChatComponent } from './personal-chat/personal-chat.component';
import { GroupChatComponent } from './group-chat/group-chat.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'chat', component: PersonalChatComponent },
  { path: 'groups', component: GroupChatComponent },
  { path: 'settings', component: SettingsComponent }
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
