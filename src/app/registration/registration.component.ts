import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { ok } from 'assert';
import { RegistrationService } from '../services/registration.service';
import { BookUser } from '../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  userGroup =  new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    userName: new FormControl(''),
    passWord: new FormControl(''),
    phoneNumber:new FormControl(''),
    userRole:new FormControl('Customer')
  });
  user = new BookUser();
  msg="";
  constructor(private _service :RegistrationService,private _router :Router) { }
 
  ngOnInit(): void {
  }
  public submitUser(user: FormGroup) {
    console.log('button clicked');
    console.log(user);
    let stringUser = JSON.stringify(user.value);
    this._service.registerUserInDatabase(stringUser).subscribe(
      response=> {
        console.log(response);
       let result= confirm("You have been registered! Please Login");
        if(result){
          this._router.navigate(['./login']);
        }
      },
      error=> {
       
        confirm("User Already exists in System!!");
        
  }
    )
  }

}
