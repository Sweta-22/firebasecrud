import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FireaddComponent } from './fireadd/fireadd.component';
import { FirelistComponent } from './firelist/firelist.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path:"addval",
    component:  FireaddComponent
  },
  {
    
      path:"get",
      component:  FirelistComponent
    },
    {
    
      path:"signin",
      component:  SigninComponent
    },
    {
    
      path:"signup",
      component:  SignupComponent
    },
    {
    
      path:"forgot",
      component:  ForgotpasswordComponent
    }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
