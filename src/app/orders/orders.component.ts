import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OrdersService } from '../services/orders.service';
import { BookUser } from '../user';
import { Orders } from './Orders';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  pendingOrdersList: Orders[];
  approvedOrdersList: Orders[];
  customer: BookUser["userName"];

  orderGroup = new FormGroup({
    orderId: new FormControl(''),
    totalcost: new FormControl(''),
    isapproved: new FormControl(''),
    date: new FormControl(''),

  });

  approveGroup = new FormGroup({
    orderId: new FormControl(''),
  });


  orderToApprove = {
    orderId: ""
  }


  constructor(private oServ: OrdersService) {}

  ngOnInit(): void {
    this.oServ.getPendingOrders().subscribe(
      response =>{
        console.log(response);
        this.pendingOrdersList=response;
      });

      this.oServ.getApprovedOrders().subscribe(
        response =>{
          console.log(response);
          this.approvedOrdersList=response;
        }
    )
  }

  display = "none";
  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }

  openModalOrder(order) {
    this.openModal();
    this.select(order);
    
  }

  public select(order) {
    this.orderToApprove = order;
  }
  reloadCurrentPage() {
    window.location.reload();
   }
  public approveOrder() {
    this.oServ.approveOrder(this.orderToApprove).subscribe(
      response => {
        console.log(response);
      }
    )
    this.reloadCurrentPage();
    this.onCloseHandled();
  }
}