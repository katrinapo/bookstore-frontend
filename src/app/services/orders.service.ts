import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Orders } from '../orders/Orders';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private urlBase = "http://localhost:9020/bookorders";
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

  public postOrder(bookorders): Observable<Orders>{
    const httpHead={
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*'
      })
    };
    return this.httpCli.post<Orders>(this.urlBase, bookorders, httpHead);
  }

  public approveOrder(order) {
    return this.httpCli.put(this.urlBase + '/approve', order)
  }
}


