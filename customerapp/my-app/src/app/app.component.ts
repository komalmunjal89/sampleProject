import { Component } from '@angular/core';
import {MycustomerAppService} from "./mycustomerApp.service";
import {forEach} from "@angular/router/src/utils/collection";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  users: Object[];
  ob: boolean= false;
  constructor(private request: MycustomerAppService, private router: Router){
  }

  login(login_credentials){
    if(!login_credentials.doRegister){
     this.request.getUserId(login_credentials)
       .subscribe((data) => {
         this.users = data;
         this.users.forEach(abc => {
           if (abc['name'] == login_credentials.name && abc['password'] == login_credentials.password) {
             this.ob=true;
             localStorage.setItem("currentUser",JSON.stringify(abc));
       }
  })
       })
    }
    else {
      var userData= {
        name: login_credentials.name,
        password: login_credentials.password,
        fullName: login_credentials.fullName,
        favourites: []
      }


      this.request.addNewUser(userData)
        .subscribe((data) =>{
          this.router.navigate(['home'])
        })
    }

  }

  logout(val){
    this.ob=false;
    this.router.navigate(['/']);
  }
}
