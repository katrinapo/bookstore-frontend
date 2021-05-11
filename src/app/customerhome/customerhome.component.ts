import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';
import { BookUser } from '../user';

@Component({
  selector: 'app-customerhome',
  templateUrl: './customerhome.component.html',
  styleUrls: ['./customerhome.component.css']
})
export class CustomerhomeComponent implements OnInit {

  user:BookUser;
  msg='';
  constructor(private _service:RegistrationService) { }

  ngOnInit(): void {
    this.msg=localStorage.getItem('userName');
    this._service.getUserByUsername().subscribe(
      response => {
        console.log(response);
        this.user=response;
      }
    )
  }
  
  
}
