import { Component, OnInit, ViewChild } from '@angular/core';
import { ReviewService} from '../shared/review/review.service';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  products: Array<any>;
  suggestions: Array<any>;
  users: Array<any>;
  reviews: Array<any>;
  
  inputComment:string = '' ;
  productSelect:number = 0 ;
  suggestionSelect:number = 0;
  scoreSelect:number = 0;
  userNameLogin = '';
  num:number = 0;

  star(data){
    console.log(data);
    
    return false;
  }

  constructor(private reviewService: ReviewService,private httpClient: HttpClient ) { }

  ngOnInit() {
    this.reviewService.getProduct().subscribe(data => {
      this.products = data;
      console.log(this.products);
    });

    this.reviewService.getSuggestion().subscribe(data => {
      this.suggestions = data;
      console.log(this.suggestions);
    });

    this.reviewService.getUser().subscribe(data => {
      this.users = data;
      console.log(this.users);
    });
    
    this.reviewService.getReview().subscribe(data => {
      this.reviews = data;
      console.log(this.reviews);
    });
  }
  addcomment : any = {
    inputComment: '',
    scoreSelect:0,
  }

  addReview(){
    this.userNameLogin = localStorage.getItem('id');
    if(this.addcomment.inputComment === '' || this.addcomment.scoreSelect === 0|| this.suggestionSelect === 0 || this.userNameLogin === ''|| this.productSelect === 0)
    alert('กรุณากรอกข้อมูลให้ครบถ้วน');
    else{
    console.log(this.addcomment)
    this.httpClient.post('http://localhost:8080/Review/createReview/'+this.userNameLogin+'/'+this.productSelect+ '/'+this.suggestionSelect+ '/',this.addcomment).subscribe(
      data => {
          console.log('POST Request is successful', data);
          alert('ขอบคุณสำหรับการแสดงความคิดเห็น');
          window.location.reload();
          this.reviewService.getReview().subscribe(data => {
            this.reviews = data;
            console.log(this.reviews);
          });
      },
      error => {
          console.log('กรุณากรอกข้อมูลให้ครบ', error);
          alert('Error');
      }
    
  );

  }
  
  }

}
