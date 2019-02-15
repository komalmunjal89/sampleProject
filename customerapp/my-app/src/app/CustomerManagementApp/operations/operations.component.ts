import { Component, OnInit } from '@angular/core';
import {MycustomerAppService} from "../../mycustomerApp.service";

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {

  constructor(private request: MycustomerAppService) { }

  customers: Object[];
  ngOnInit() {
    this.loadCustomers();
  }
  loadCustomers(){
    this.request.getAllCustomers()
      .subscribe((data) => {
        this.customers = data;
        console.log(data);
      })
  }

  deleteCustomer(customer){
     this.request.deleteCustomer(customer.id)
       .subscribe((data) => {
       this.loadCustomers();
       })
  }

  updateCustomer(customer){
    this.request.updateCustomer(customer)
      .subscribe((data) => {
        this.loadCustomers();
      })
  }
}
