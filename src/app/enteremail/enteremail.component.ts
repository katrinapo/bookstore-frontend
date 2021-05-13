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
  email:string;
  

  constructor(private _service:UsersService, private _route:Router) { }

  ngOnInit(): void {
  }

  checkEmail(){
    this._service.checkIfEmailExists(this.email).subscribe(
      data =>{console.log("response received");
      this._route.navigate(['/enterpassword']);
    }, 
    error =>{console.log("Exception occured");
    this.message="The email you entered does not exist.\n Please enter it again";
  }
    )
  }



}
