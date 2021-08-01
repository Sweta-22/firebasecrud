import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirelistComponent } from './firelist/firelist.component';
import { FireupdateComponent } from './fireupdate/fireupdate.component';
import { FireaddComponent } from './fireadd/fireadd.component';
import{HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import {  AngularFirestoreModule} from '@angular/fire/firestore';
import { AuthserviceService } from './authservice.service';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    FirelistComponent,
    FireupdateComponent,
    FireaddComponent,
    ForgotpasswordComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    RouterModule,
    ReactiveFormsModule,
   

    
  ],
  providers: [AuthserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
