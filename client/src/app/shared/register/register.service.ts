import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Form } from '@angular/forms';
import { ObserversModule } from '@angular/cdk/observers';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  public API = '//localhost:8080';

  constructor(private http: HttpClient) { }

  getGender(): Observable<any> {
    return this.http.get(this.API + '/Genders');
  }
  getUser(): Observable<any> {
    return this.http.get(this.API + '/Users');
  }
  getProvince(): Observable<any> {
    return this.http.get(this.API + '/Provinces');
  }

  public register(reg: Form): Observable<any> {
    let result;
    result = this.http.post(this.API + '/Register' , reg);
    return result;
  }
}
