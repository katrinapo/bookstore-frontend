import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
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

  constructor(private _service:RegistrationService ,private _route:Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    this._service.loginUserFromRemote(this.user).subscribe(
      data => {console.log("response recieved");
      this._route.navigate(['./customerhome']);
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
