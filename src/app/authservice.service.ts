import { Injectable } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import firebase from 'firebase';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { SignupComponent } from './signup/signup.component';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  authState:any=null;
  

  constructor(
    public afauth: AngularFireAuth,
    public router: Router
  ) { }
  SignIn(email: any, password: any) {
    return this.afauth.signInWithEmailAndPassword(email, password).then((result: any) => {
      console.log(result);
    })
  }
  SignUp(email:string,password:string){
    return this.afauth.createUserWithEmailAndPassword(email,password).then((user)=>{
       this.authState=user
      console.log(this.authState);
      this.router.navigate(['/signin']);
    }).catch(error=>{
      console.log(error);
      
    });
   
    }
    ForgotPass(email:string){
       return this.afauth.sendPasswordResetEmail(email).then((result)=>{
        console.log(result);
       })

    }
    googleLogin(){
      return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
    }
    AuthLogin(provider: firebase.auth.AuthProvider){
      this.afauth.signInWithPopup(provider).then((result)=>{
        console.log('you have sucessfully logged in');
      }).catch(error=>{
        console.log(error)
      })
    }
  }


