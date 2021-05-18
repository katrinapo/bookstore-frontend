import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeenav',
  templateUrl: './employeenav.component.html',
  styleUrls: ['./employeenav.component.css']
})
export class EmployeenavComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }
  logoutUser(){
    localStorage.removeItem('userName');
    localStorage.clear();
    this._router.navigate(['./login']);
  }
}
