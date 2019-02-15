import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() login: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }
  userId:string="";
  password:string="";
  registerFlag:boolean=false;
  fullName:string="";


  ngOnInit() {
  }

  logIn(userId,password){
    var login={
        name:userId,
        password: password,
        doRegister:false,
    }
    this.login.emit(login);

  }
  doRegister(){
    this.registerFlag = !this.registerFlag;
  }

  register(){
    var login={
      name:this.userId,
      password: this.password,
      doRegister: true,
      fullName: this.fullName
    }
    this.login.emit(login);
    location.reload();

  }
}
