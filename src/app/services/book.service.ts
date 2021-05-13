import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private urlBase = "http://localhost:9020/books"
  constructor(private httpCli: HttpClient) { }

  public getAllBooks(): Observable<Book[]> {
    const httpHead = {
      headers: new HttpHeaders ({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.httpCli.get<Book[]>(this.urlBase, httpHead);

  }

  public postBook(book): Observable<Book>{
    const httpHead = {
      headers: new HttpHeaders ({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.httpCli.post<Book>(this.urlBase,book, httpHead);
  }

  public updateBook(book) {
    
    const httpHead = {
      headers: new HttpHeaders ({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };

    this.httpCli.put(this.urlBase, {
      "title": book.title,
      "author": book.author,
      "genre": book.genre,
      "cost": book.cost,
      "quantity": book.quantity,
    }, httpHead)
    .subscribe();
  }

}
