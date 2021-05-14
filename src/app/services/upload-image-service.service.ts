import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { formatDiagnosticsWithColorAndContext } from 'typescript';

@Injectable({
  providedIn: 'root'
})
export class UploadImageServiceService {

  constructor(private http: HttpClient) { }

  pushFileToStorage(title: String,file: File): Observable<HttpEvent<{}>> {

    const httpHead = {
      headers: new HttpHeaders ({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };

    const formdata: FormData = new FormData();

    formdata.append('file',file);

    const req = new HttpRequest('PUT', 'http://localhost:9020/books/upload/file', file, httpHead);
    return this.http.request(req);
  }
  
}