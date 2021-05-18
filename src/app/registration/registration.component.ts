import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';
import { BookUser } from '../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  userGroup =  new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    email: new FormControl('',Validators.email),
    userName: new FormControl('',Validators.required),
    passWord: new FormControl('',Validators.required),
    phoneNumber:new FormControl('',Validators.required),
    userRole:new FormControl('customer')
  });
  user = new BookUser();
  msg="";
  constructor(private _service :RegistrationService,private _router :Router,private fb: FormBuilder) { }
 
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
     console.log(error.error.message);
       
        confirm(error.error.message);
        
  }
    )
  }

}
