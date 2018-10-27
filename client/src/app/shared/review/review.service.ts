import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  public API = '//localhost:8080';
  constructor(private http: HttpClient) { }

  getProduct(): Observable<any> {
      return this.http.get(this.API + '/Products');
    }

  getSuggestion(): Observable<any> {
      return this.http.get(this.API + '/Suggestion');
    }

  getUser(): Observable<any> {
      return this.http.get(this.API + '/Users');
    }
   
    getReview(): Observable<any> {
      return this.http.get(this.API + '/Review');
    }


     addReview(inputComment:string,scoreSelect:number,userNameLogin:number,productSelect:number,suggestionSelect:number){
    return this.http.post(this.API + '/Review/createReview/'+userNameLogin+'/'+productSelect+'/'+suggestionSelect+'/'+inputComment+'/'+scoreSelect,{
     
      "productName":productSelect,
      "suggestionHead":suggestionSelect,
      "userUserName":userNameLogin,
      "comment":inputComment,
      "score":scoreSelect

    });
  }
    }
  

