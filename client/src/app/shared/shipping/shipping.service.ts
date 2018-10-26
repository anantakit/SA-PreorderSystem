import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';



@Injectable({
  providedIn: 'root'
})

export class ShippingService {
  public API = '//localhost:8080';

  constructor(private http: HttpClient) { }


  getProvince(): Observable<any> {
    return this.http.get(this.API + '/Province');
  }
  getStatus(): Observable<any> {
    return this.http.get(this.API + '/Status');
  }


  getProcess(): Observable<any> {
    return this.http.get(this.API + '/ShippingProcess');
  }
  getPre(): Observable<any> {
    return this.http.get(this.API + '/Preorder2');
  }


  addProcess(inputProcess: string,inputDetail: string){
    return this.http.post(this.API + '/ShippingProcess/addShippingProcess/'+inputProcess+'/'+inputDetail,{
      "name": inputProcess,
      "detail": inputDetail
    });
  }

  addShipping(preorderSelect: number, statusName:string, processSelect: number,inputDateStart: Date,inputDateEnd: Date){
    return this.http.post(this.API + '/Shippingslip/addShippingslip/'+ preorderSelect + '/' +processSelect+'/'+inputDateStart+'/'+inputDateEnd,{
      "preId": preorderSelect,
      "statusName": statusName,
      "shippingProcessId":processSelect,
      "start":inputDateStart,
      "end":inputDateEnd,
    });
  }

  getShippingList(){
    return this.http.get(this.API + '/Slip');
  }
}
