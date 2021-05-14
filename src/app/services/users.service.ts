import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookUser } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private urlBase = "http://localhost:9020/users/email/?email=";
  constructor(private httpCli: HttpClient) { }

  public checkIfEmailExists(email):Observable<BookUser[]>{

    const httpHead = {
      headers: new HttpHeaders ({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.httpCli.get<BookUser[]>("http://localhost:9020/users/email/?email="+email,httpHead)


  }

  public sendEmail(email):Observable<any>{
    const httpHead = {
      headers: new HttpHeaders ({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };
    console.log(email);
    console.log(typeof(email));
    return this.httpCli.get<any>("http://localhost:9020/users/forgotpassword1", httpHead)
  }
}
