import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-createpassword',
  templateUrl: './createpassword.component.html',
  styleUrls: ['./createpassword.component.css']
})
export class CreatepasswordComponent implements OnInit {

  token="";
  password="";
  message="";
  constructor(private _service:UsersService, private _httpCli:HttpClient,private activatedRoute:ActivatedRoute) { 


  }

  ngOnInit(): void {
 

  }

  resetPassword(){
    this.activatedRoute.queryParams.subscribe(params=>{
      this.token=params['token'];
      console.log(this.token);
    })
    this._service.updatePassword(this.token, this.password).subscribe(
      data=>{console.log("response received");
      console.log(this.token);
      console.log(data);
      this.message="Password reset successful. Please login with new password.";
    
    },
    error =>{console.log("Exception occured");
    this.message="Error changing password.";
      }
    )
  }
}