import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddstaffComponent } from './addstaff/addstaff.component';
import { AdduserComponent } from './adduser/adduser.component';
import { CmsComponent } from './cms/cms.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditpageComponent } from './editpage/editpage.component';
import { EdituserComponent } from './edituser/edituser.component';
import { EnquiresComponent } from './enquires/enquires.component';
import { MastersettingsComponent } from './mastersettings/mastersettings.component';
import { NotificationComponent } from './notification/notification.component';
import { QuerymanagementComponent } from './querymanagement/querymanagement.component';
import { ReportsComponent } from './reports/reports.component';
import { StaffmanagementComponent } from './staffmanagement/staffmanagement.component';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import { ViewenquiresComponent } from './viewenquires/viewenquires.component';

const routes: Routes = [
  {path:'', component:DashboardComponent},
  {path:'querymanagement', component:QuerymanagementComponent},
  {path:'usermanagement', component:UsermanagementComponent},
  {path:'adduser', component:AdduserComponent},
  {path:'edituser', component:EdituserComponent},
  {path:'cms', component:CmsComponent},
  {path:'editpage', component:EditpageComponent},
  {path:'notification', component:NotificationComponent},
  {path:'reports', component:ReportsComponent},
  {path:'enquiries', component:EnquiresComponent},
  {path:'viewenquiries', component:ViewenquiresComponent},
  {path:'staffmanagement', component:StaffmanagementComponent},
  {path:'addstaff', component:AddstaffComponent},
  {path:'mastersettings', component:MastersettingsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
