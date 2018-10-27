import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranferService {

  constructor(private http:HttpClient) { }


  save(payment:any,reportNumber:number,filename:any):Observable<any>{
    let result:Observable<Object>;
    result = this.http.post('//localhost:8080/payments/'+reportNumber+'/'+filename,payment);
    return result;
  }

  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    formdata.append('file', file);
    const req = new HttpRequest('POST', 'http://localhost:8080/upload', formdata, {
      responseType: 'text'
    });
    return this.http.request(req);
  }

  getUser(user:any): Observable<any> {
    return this.http.get('//localhost:8080/'+user);
  }
  getPayment(user:any): Observable<any>{
    return this.http.get('//localhost:8080/payments/'+user);
  }
}
