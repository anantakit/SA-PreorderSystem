import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class ClassificationService {

  public API = '//localhost:8080';

  constructor(private http: HttpClient) { }

  getProduct(): Observable<any> {
    return this.http.get(this.API + '/Products');
  }

  getCountry(): Observable<any> {
    return this.http.get(this.API + '/Country');
  }

  getClassification(): Observable<any> {
    return this.http.get(this.API + '/Classification');
  }
  getTypes(): Observable<any> {
    return this.http.get(this.API + '/Type');
  }
  putClassificationAll(productSelect:number,classSelect:number,typeSelect:number,countrySelect:number):Observable<any>{
    return this.http.put(this.API + '/Classification/'+productSelect+'/'+classSelect+'/'+typeSelect+'/'+countrySelect,{
      'productName':productSelect,
      'className':classSelect,
      'typeName':typeSelect,
      'countryName':countrySelect
    });
  }

  addClassification(inputClass:string){
    return this.http.post(this.API + '/Classification/addClassification/'+inputClass,{
      'className':inputClass,
    });
  }
  addType(inputType:string){
    return this.http.post(this.API + '/Type/addType/'+inputType,{
      'typeName':inputType,
    });
  }
}
