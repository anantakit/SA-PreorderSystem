import { Component, OnInit } from '@angular/core';
import { ClassificationService } from '../shared/classification/classification.service';
import { PreorderService } from '../shared/preorder/preorder.service';
import {Router} from '@angular/router';
export interface PeriodicElement {  
  productId: number;
  productName: string;
  classification:string;
  country:string;
  type:string;
  detail:string;
  price:number;
  imgUrl:string;
}
@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  products:Array<any>; //source
  dataSource:any;
  productList = [];
  productLength:any;
  username = 'YoYo';

  constructor(private classificationService: ClassificationService,private preorderService: PreorderService,private router:Router) { }
  ngOnInit() {  
    this.getProductList();
  }

  getProductList(){
    this.classificationService.getProduct().subscribe(data => {
    this.products = data;
    this.productLength = this.products.length;
    console.log(data);
    });
  } 
}
