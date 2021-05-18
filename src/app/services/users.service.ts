import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../book';
import { Orders } from '../orders/Orders';
import { BookUser } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private urlBase = "http://13.59.41.118:9020/users/email/?email=";
  constructor(private httpCli: HttpClient) { }

  public checkIfEmailExists(email):Observable<BookUser[]>{

    const httpHead = {
      headers: new HttpHeaders ({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.httpCli.get<BookUser[]>("http://13.59.41.118:9020/users/email/?email="+email,httpHead)


  }

  public sendEmail(name):Observable<string>{
    const httpHead = {
      headers: new HttpHeaders ({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };
    // console.log(name);
    // console.log(typeof(name));
    return this.httpCli.post<string>("http://13.59.41.118:9020/users/forgotpassword1/"+name,httpHead)
  }

  public updatePassword(token,password):Observable<string>{
    const httpHead = {
      headers: new HttpHeaders ({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.httpCli.post<string>("http://13.59.41.118:9020/users/resetpassword?token="+token+"&password="+password,httpHead)
  }

}
