import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BorrowingComponent } from './borrowing/borrowing.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { QueryFormComponent } from './query-form/query-form.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {path:'', component: HomeComponent },
  {path:'borrowing', component: BorrowingComponent },
  {path:'faq', component: FaqComponent },
  {path:'contactus', component: ContactusComponent },
  {path:'signin', component: SigninComponent },
  {path:'query-form/:id', component: QueryFormComponent },
  {
    path:'user', canActivate:[],
    loadChildren:()=>import('./user/user.module')
    .then(mod=>mod.UserModule)
  },
  {
    path:'admin', canActivate:[],
    loadChildren:()=>import('./admin/admin.module')
    .then(mod=>mod.AdminModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
