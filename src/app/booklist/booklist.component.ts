import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';
import { Orders } from '../orders/Orders';
import { BookService } from '../services/book.service';

import { OrdersService } from '../services/orders.service';


@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  bookList: Book[];

  ordersList:any=[];
   amount=0;
 
  constructor(private bookServ: BookService, private oServ:OrdersService, private _router:Router) { }
  ngOnInit(): void {
    this.bookServ.getAllBooks().subscribe(
      response => {
        console.log(response);
        this.bookList=response;
        
      }
    )
  }
  public addToList(bookList){
    this.ordersList.push(bookList);
   
    this.amount+= parseInt(bookList.cost);
    console.log(this.ordersList);
    console.log(this.amount);
    console.log(bookList);

  }
  public submitOrder(){
      console.log(this.ordersList);
      console.log(this.amount);
    
      this.oServ.postOrder(this.ordersList,this.amount).subscribe(
        response => {
          console.log(response);
          this._router.navigate(['./checkout']);
        }
      )
  }

}
