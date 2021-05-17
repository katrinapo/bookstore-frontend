import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { compilePipeFromMetadata } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { formatDiagnosticsWithColorAndContext } from 'typescript';
import { Book } from '../book';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';

@Injectable({
  providedIn: 'root'
})
export class UploadImageServiceService {

 
  constructor(private httpCli: HttpClient) { }

  uploadFile(file) {

    const httpHead = {
      headers: new HttpHeaders ({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };
    const bucket = new S3(
      {
        accessKeyId: 'AKIAZUDPR6KH3GXIHWQG',
        secretAccessKey: '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',
        region: 'us-east-2'
      }
    );

    const params = {
      Bucket: 'bookimagesbucket',
      Key: file.name,
      Body: file
    };

    bucket.upload(params, function (err, data){
      if (err) {
        console.log('There was an error uploading your file: ', err);
        return false;
      }

      console.log('Successfully uploaded file.', data);
      return true;
    }
    
    
    );

  }

  addImageToBook(book) {
    return this.httpCli.put("http://localhost:9020/books/addImage", book)
  }


  /*pushFileToStorage(file: File, title: String) {
    const httpHead = {
      headers: new HttpHeaders ({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };
    const formdata: FormData = new FormData();

    formdata.append('file',file);

    const req = new HttpRequest('POST', 'http://localhost:9020/books/upload/file', {
      "file": file,
      "title": title
    },  httpHead);
    return this.http.request(req);
  }

  uploadd(file:File) {
    const httpHead = {
      headers: new HttpHeaders ({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };

    const req = new HttpRequest('POST', 'http://localhost:9020/books/uploadd', file,  httpHead);
    return this.http.request(req);
  }*/

  }


  