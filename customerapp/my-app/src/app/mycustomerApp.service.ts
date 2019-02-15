import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map' ;

const LOGIN_URL = 'http://localhost:3000/users';
const CUSTOMER_URL = 'http://localhost:3000/customers/';
const header = {headers: new Headers({'Content-Type': 'application/json'})}

@Injectable()
export class MycustomerAppService {

  constructor(private http: Http) { }
filterBy:string;

  getUserId(data){

    return this.http.get(LOGIN_URL).map(res => res.json());
  }

  getAllCustomers(){
    return this.http.get(CUSTOMER_URL).map(res => res.json());
  }

  addNewUser(data){
    return this.http.post((LOGIN_URL),data,header).map(res=>res.json());
  }
  addCustomerData(data){
    return this.http.post(CUSTOMER_URL,data,header).map(res => res.json());
  }

  deleteCustomer(id){
    return this.http.delete(`${CUSTOMER_URL}${id}`).map(res => res.json());
  }

  updateCustomer(data){
    return this.http.patch(`${CUSTOMER_URL}${data.id}`,data,header).map(res => res.json());
  }
}
