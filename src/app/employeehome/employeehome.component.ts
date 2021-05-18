import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../services/registration.service';
import { BookUser } from '../user';

@Component({
  selector: 'app-employeehome',
  templateUrl: './employeehome.component.html',
  styleUrls: ['./employeehome.component.css']
})
export class EmployeehomeComponent implements OnInit {

  user: BookUser;
  constructor(private _service:RegistrationService) { }
  msg='';
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
