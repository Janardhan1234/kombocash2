import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoandetailComponent } from './loandetail/loandetail.component';
import { NotificationComponent } from './notification/notification.component';
import { ProfileComponent } from './profile/profile.component';

import { SettingsComponent } from './settings/settings.component';
import { UserborrowingComponent } from './userborrowing/userborrowing.component';
import { UsercontactusComponent } from './usercontactus/usercontactus.component';
import { UserfaqComponent } from './userfaq/userfaq.component';

const routes: Routes = [
  {path:'', component: DashboardComponent},
  {path:'userborrowing', component: UserborrowingComponent},
  {path:'userfaq', component: UserfaqComponent},
  {path:'usercontactus', component: UsercontactusComponent},
  {path:'loandetail', component: LoandetailComponent},
  {path:'notification', component: NotificationComponent},
  {path:'profile', component: ProfileComponent},
  {path:'settings', component: SettingsComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
