import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-customernav',
  templateUrl: './customernav.component.html',
  styleUrls: ['./customernav.component.css']
})
export class CustomernavComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }
  logoutUser(){
    localStorage.removeItem('userName');
    localStorage.clear();
    this._router.navigate(['./login']);
  }
}
