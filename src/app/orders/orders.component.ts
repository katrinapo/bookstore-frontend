import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OrdersService } from '../services/orders.service';
import { Orders } from './Orders';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  ordersList: Orders[];
  orderGroup = new FormGroup({

    orderid: new FormControl(''),
    totalcost: new FormControl(''),
    isapproved: new FormControl(''),
    date: new FormControl(''),

  });
  constructor(private oServ: OrdersService) {}

  ngOnInit(): void {
    this.oServ.getAllOrder().subscribe(
      response =>{
        console.log(response);
        this.ordersList=response;
      }
    )
  }


}
