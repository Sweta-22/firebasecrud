import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email='';
  password='';
  message='';
  errorMessage='';
  error:{name:string,message:string}={name: '',message:''};

  constructor(public service:AuthserviceService) { }
  clearErrorMessage(){
    this.errorMessage='';
    this.error={name:'',message:''};
  }

  ngOnInit(): void {
    this.message="you  register with data on firebase";
  }
  // register(){
  //   this.clearErrorMessage()
  //    if(this.validateForm(this.email,this.password)){
  //   this.service.SignUp(this.email,this.password).then(()=>{
  //     this.message="you are registered with dataon firebase";
  //   }).catch(error=>{
  //     console.log(error)
  //   })

  // }
}
  


