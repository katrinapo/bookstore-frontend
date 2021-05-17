import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { BookUser } from '../user';

@Component({
  selector: 'app-enteremail',
  templateUrl: './enteremail.component.html',
  styleUrls: ['./enteremail.component.css']
})


export class EnteremailComponent implements OnInit {
  message="";
  user = new BookUser();
  name:string;
  constructor(private _service:UsersService, private _route:Router, private _httpCli:HttpClient) { }
  ngOnInit(): void {
  }
  checkEmail(){
    this._service.sendEmail(this.name).subscribe(
      data =>{console.log("response received");
              console.log(data);
      this.message="Please check your email to reset password with the link provided";
    this._route.navigate(['/enterpassword']);
      console.log(this.name);
     }, 
    error =>{console.log("Exception occured");
   this.message="The username you entered does not exist.\n Please enter it again";
  }
 )
} }
