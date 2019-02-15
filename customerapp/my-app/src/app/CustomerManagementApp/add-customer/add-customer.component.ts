import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {MycustomerAppService} from "../../mycustomerApp.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  constructor(private router:Router,private request: MycustomerAppService) { }
name;
  description;
category;
user;

  ngOnInit() {
  }

title:string="";


  addCustomer(cname,phoneNo,email,age){

    this.user= JSON.parse(localStorage.getItem('currentUser'));
    var customer={
      cname: cname,
      phoneNo: phoneNo,
      email:email,
      age: age,
      postedBy: this.user,
      likes: 0,
      dislikes: 0
    }
    this.request.addCustomerData(customer)
      .subscribe((data) =>{
      this.router.navigate(['home'])
      })

  }
}
