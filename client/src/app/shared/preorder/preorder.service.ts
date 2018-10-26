import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PreorderService {

  constructor(private http: HttpClient) { }

  getUser(): Observable<any>{
      return this.http.get('//localhost:8080/User');
  }
  getProduct(productId:number): Observable<any>{
    return this.http.get('//localhost:8080/Products/'+productId);
  }
  getStatus(): Observable<any>{
    return this.http.get('//localhost:8080/Status');
  }
  addNewPreorder(userName:string,productId:number,preorder:Form):Observable<any>{
    return this.http.post('//localhost:8080/newPreorder/'+userName+'/'+productId+'/',preorder);
  }
  getPreorderByUserName(userName:string){
    return this.http.get('//localhost:8080/Preorder/'+userName);
  }
}
