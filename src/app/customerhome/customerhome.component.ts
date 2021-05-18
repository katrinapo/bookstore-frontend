import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { Orders } from '../orders/Orders';
import { OrdersService } from '../services/orders.service';
import { RegistrationService } from '../services/registration.service';
import { BookUser } from '../user';

@Component({
  selector: 'app-customerhome',
  templateUrl: './customerhome.component.html',
  styleUrls: ['./customerhome.component.css']
})
export class CustomerhomeComponent implements OnInit {
  ordersList: Orders[];
  user:BookUser;
  msg='';
  constructor(private _service:RegistrationService,private oServ: OrdersService) { }
  bookList: Book[];
  ngOnInit(): void {
    this.msg=localStorage.getItem('userName');
    this._service.getUserByUsername().subscribe(
      response => {
        console.log(response);
        this.user=response;
      }
    )
    this.oServ.getOrders().subscribe(
      response =>{
        console.log(response);
        this.ordersList=response;
      }
    )
  }
  
  
}
