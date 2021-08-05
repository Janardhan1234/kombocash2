import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { QuerymanagementComponent } from './querymanagement/querymanagement.component';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { EdituserComponent } from './edituser/edituser.component';
import { CmsComponent } from './cms/cms.component';
import { EditpageComponent } from './editpage/editpage.component';
import { NotificationComponent } from './notification/notification.component';
import { ReportsComponent } from './reports/reports.component';
import { EnquiresComponent } from './enquires/enquires.component';
import { ViewenquiresComponent } from './viewenquires/viewenquires.component';
import { StaffmanagementComponent } from './staffmanagement/staffmanagement.component';
import { AddstaffComponent } from './addstaff/addstaff.component';
import { MastersettingsComponent } from './mastersettings/mastersettings.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [QuerymanagementComponent, UsermanagementComponent, AdduserComponent, ViewuserComponent, EdituserComponent, CmsComponent, EditpageComponent, NotificationComponent, ReportsComponent, EnquiresComponent, ViewenquiresComponent, StaffmanagementComponent, AddstaffComponent, MastersettingsComponent, DashboardComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
