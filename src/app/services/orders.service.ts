import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../book';
import { Orders } from '../orders/Orders';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private urlBase = "http://13.59.41.118:9020/bookorders";
  constructor(private httpCli: HttpClient) { }

  public getAllOrder(): Observable<Orders[]> {
    const httpHead={
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*'
      })
    };

    return this.httpCli.get<Orders[]>(this.urlBase, httpHead);
  }

  public getPendingOrders(): Observable<Orders[]> {
    const httpHead={
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*'
      })
    };

    return this.httpCli.get<Orders[]>(this.urlBase+"/pending", httpHead);
  }

  public getApprovedOrders(): Observable<Orders[]> {
    const httpHead={
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*'
      })
    };

    return this.httpCli.get<Orders[]>(this.urlBase+"/approved", httpHead);
  }

  public postOrder(bookList,amount){
    const httpHead={
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*'
      })
    };
    return this.httpCli.post('http://13.59.41.118:9020/bookorders/submitorder?amount='+amount+"&userName="+localStorage.getItem('userName'), bookList, httpHead);
  }


  public getOrders(): Observable<Orders[]> {
    const httpHead={
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*'
      })
    };

    return this.httpCli.get<Orders[]>(this.urlBase+"/ordersbyuser?userName="+localStorage.getItem('userName'), httpHead);
  }


  public approveOrder(order) {
    return this.httpCli.put(this.urlBase + '/approve', order)
  }

}


