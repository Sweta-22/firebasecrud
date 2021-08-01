import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-fireadd',
  templateUrl: './fireadd.component.html',
  styleUrls: ['./fireadd.component.css']
})
export class FireaddComponent implements OnInit {

  constructor(private service:FirebaseService) { }

  ngOnInit(): void {
  }
  // onSubmit(form:any){
  //   this.service.addRecord(form).subscribe(res=>{
  //     console.log(res);
  //     console.log(form);
  //   })
  // }

} 
