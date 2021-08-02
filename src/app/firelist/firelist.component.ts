import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-firelist',
  templateUrl: './firelist.component.html',
  styleUrls: ['./firelist.component.css']
})
export class FirelistComponent implements OnInit {
  emplist:any[]=[];

  constructor(private service:FirebaseService) { }

  ngOnInit(): void {
// this.service.getRecord().subscribe((res:any)=>{
//   console.log(res);
//   this.emplist=res.data;
// })
  }
// deleteUser(val:any){
//   this.service.deleteRecord(val).subscribe(res=>{
//     console.log(res);
//     this.ngOnInit();
//   })




}
