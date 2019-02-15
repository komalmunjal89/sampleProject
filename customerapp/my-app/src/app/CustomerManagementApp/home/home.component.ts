import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Router} from "@angular/router";
import {MycustomerAppService} from "../../mycustomerApp.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private request:MycustomerAppService, private router:Router) { }
  value:boolean=false;
  cname;
  phoneNo;
  email;
  age;
  item;
  user;
  val:boolean =false;

  link = {
    addCustomer: ["/addCustomer"],
  }
  @Input() customers;
  @Output() deleteCustomerOut: EventEmitter<any> = new EventEmitter<any>();
  @Output() updateCustomerOut: EventEmitter<any> = new EventEmitter<any>();
  ngOnInit() {
    this.user= JSON.parse(localStorage.getItem("currentUser"));
    this.listView();
  }


  loadCustomer(customer,val){
    this.cname= customer.cname;
    this.phoneNo= customer.phoneNo;
    this.email=customer.email;
    this.age=customer.age;
    this.value=val;
    this.item=customer;

  }

  updateCustomerDetails(cname,phoneNo,email,age){
    this.item.cname= cname;
    this.item.phoneNo= phoneNo;
    this.item.email=email;
    this.item.age= age;
    this.updateCustomerOut.emit(this.item);
    this.value=false;
  }

  deleteCustomer(customer){
     this.deleteCustomerOut.emit(customer);
  }

  backButton(){
    this.value=false;

  }
  // List View
  elements = document.getElementsByClassName("box");
  listView() {


    for (i = 0; i < this.elements.length; i++) {
      this.elements[i].setAttribute("style","width:80%");
    }
  }
  // Grid View
  gridView() {

    for (i = 0; i < this.elements.length; i++) {

      this.elements[i].setAttribute("style","width:40%");
  }
  }


}



// Declare a loop variable
var i;







