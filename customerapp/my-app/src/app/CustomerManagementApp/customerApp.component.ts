import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MycustomerAppService} from "../mycustomerApp.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer',
  templateUrl: './customerApp.component.html',
  styleUrls: ['./customerApp.component.css']
})

export class CustomerAppComponent implements OnInit {
  currentUser: "";


  constructor(private userService: MycustomerAppService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }
@Output() logout1: EventEmitter<any>=new EventEmitter<any>();
  link = {
    home: ["/home"],
    login: ["/login"]
  }


  ngOnInit() {

  }


  logout(){
    localStorage.setItem("currentUser","");
    this.logout1.emit(true);
  }
}
