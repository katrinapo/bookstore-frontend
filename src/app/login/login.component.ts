
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';
import { BookUser } from '../user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 msg = "";
  user = new BookUser();
  user2=new BookUser();
  userRole='';
  constructor(private _service:RegistrationService ,private _route:Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    this._service.loginUserFromRemote(this.user).subscribe(
      response => {console.log("response recieved");
       
        this.user2=response;
      localStorage.setItem('userName',this.user.userName);
     this.userRole= response.userRole;
     if(this.userRole=="Customer"){
      this._route.navigate(['./customerhome']);}
      else{
        this._route.navigate(['./employeehome']);
      }
    },
      error=> {console.log("Exception occured");
      this.msg="Please enter valid username and password";
  }
    )
  }

  registerUser(){
    this._route.navigate(['./registration']);
  }

  

}
