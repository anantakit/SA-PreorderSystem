import { Injectable } from '@angular/core';
import {HttpClient} from 'node_modules/@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  username:any;

  constructor(private http:HttpClient) { }

  login(passwordForm:any){
    let result:Observable<Object>;
    result = this.http.post('//localhost:8080/login',passwordForm);
    return result;
  }

  loginedIn(){
    return !!localStorage.getItem('id');
  }
}
