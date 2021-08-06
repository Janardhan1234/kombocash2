import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoandetailComponent } from './loandetail/loandetail.component';
import { NotificationComponent } from './notification/notification.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeadersigninComponent } from './headersignin/headersignin.component';
import { FootersigninComponent } from './footersignin/footersignin.component';
import { UserborrowingComponent } from './userborrowing/userborrowing.component';
import { UserfaqComponent } from './userfaq/userfaq.component';
import { UsercontactusComponent } from './usercontactus/usercontactus.component';



@NgModule({
  declarations: [LoandetailComponent,
    NotificationComponent,
    ProfileComponent,
    SettingsComponent,
    DashboardComponent,
    HeadersigninComponent,
    FootersigninComponent,
    UserborrowingComponent,
    UserfaqComponent,
    UsercontactusComponent,
    ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
