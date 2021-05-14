import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookUser } from '../user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http:HttpClient) { }

  public loginUserFromRemote(user:BookUser):Observable<any>{
    
      return this._http.post<any>("http://localhost:9020/users/login",user)
  }

  public registerUserInDatabase(user: string):Observable<BookUser>{
    const httpHead = {
      headers: new HttpHeaders ({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this._http.post<BookUser>("http://localhost:9020/users/register",user,httpHead)
  }
  
 
  public getUserByUsername():Observable<BookUser>{
    
    const httpHead = {
      headers: new HttpHeaders ({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this._http.get<BookUser>("http://localhost:9020/users/username/?username="+localStorage.getItem('userName'),httpHead)
  }
}
