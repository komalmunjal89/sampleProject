import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CustomerAppComponent } from './CustomerManagementApp/customerApp.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {MycustomerAppService} from "./mycustomerApp.service";
import {RouterModule} from "@angular/router";
import { HomeComponent } from './CustomerManagementApp/home/home.component';
import { OperationsComponent } from './CustomerManagementApp/operations/operations.component';
import { AddCustomerComponent } from './CustomerManagementApp/add-customer/add-customer.component';
import { ProfileComponent } from './CustomerManagementApp/profile/profile.component';
import { UploadsComponent } from './CustomerManagementApp/uploads/uploads.component';




const approutes = [
  {path: "", redirectTo: '/home', pathMatch: 'full'},
  {path: "home", component: OperationsComponent},
  {path:"addCustomer", component: AddCustomerComponent},
  {path:"login",component: AppComponent},
  {path: "profile", component: ProfileComponent},
  {path:"uploads",component: UploadsComponent},
  {path: "**", component: OperationsComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomerAppComponent,
    HomeComponent,
    OperationsComponent,
    AddCustomerComponent,
    ProfileComponent,
    UploadsComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [MycustomerAppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
