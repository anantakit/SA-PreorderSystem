import { Component, OnInit } from '@angular/core';
import { PreorderService} from '../shared/preorder/preorder.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-preorder',
  templateUrl: './preorder.component.html',
  styleUrls: ['./preorder.component.css']
})
export class PreorderComponent implements OnInit {
  selectUser:number; products:any;statuses:any;
  productIndex:number;
  productName = '';
  productPrice = 0;
  userName = 'YoYo';
  statusName:string;
  productSelect:any;
  preorder: any = {
    amount: '',
    sumPrice: 0,
  };
  constructor(private preorderService: PreorderService,private route: ActivatedRoute,private router: Router) { 
    this.productIndex = route.snapshot.params.product;
  }

ngOnInit() {
    
      this.preorderService.getProduct( this.productIndex).subscribe(data => {
        this.productName = data.productName;
        this.productPrice = data.productPrice;
      });

      this.preorderService.getStatus().subscribe(data => {
        this.statuses = data;
        console.log(this.statuses);
      });

    }
  //เพิ่มใบพรีออเดอร์
  postPreorder(preorder:NgForm){
      this.statusName  = 'รอชำระเงิน';
      this.preorderService.addNewPreorder(this.userName,this.productIndex,this.statusName,preorder).subscribe(
      data => {
        console.log(data);
        localStorage.setItem("myObject",JSON.stringify(data));
        alert('ซื้อ '+this.productName+' แล้ว '+' สถานะ : '+this.statusName);
        this.router.navigate(['/show-preorder'])
      },
      error => {
        alert('กรุณากรอกจำนวนสินค้าด้วยค่ะ');
        console.log("Error", error);
      }
     );
    }
  goShopping(){
    this.router.navigate(['/shopping'])
  }
  //ดัก event ถ้าป้อนจำนวนสินค้าจะคำนวณราคารวม
  onKey(event: KeyboardEvent) {
    try{
      this.preorder.sumPrice=this.productPrice*this.preorder.amount;
    }
    catch{
      console.log('Error');
    }
  }

}
