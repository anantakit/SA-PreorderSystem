import {Component, OnInit} from '@angular/core';
import {ShippingService} from '../shared/shipping/shipping.service';


@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})

export class ShippingComponent implements OnInit {

  preorderSelect:number = 1;
  processSelect:number = 0;
  inputDateStart: any;
  inputDateEnd: any;

  statusName:string;
  inputProcess:string ;
  inputDetail:string ;
  processs: Array<any>;
  preorders: Array<any>;

  constructor(private shippingService: ShippingService) { }

  ngOnInit() {
    this.getProcessList();
    this.getPreorderList();
  }
  getPreorderList(){
    this.shippingService.getPre().subscribe(data => {
      this.preorders = data;
      console.log(this.preorders);
    });
  }


  getProcessList(){
    this.shippingService.getProcess().subscribe(data => {
      this.processs = data;
      console.log(this.processs);
    });

  }
  postProcess(){
    this.shippingService.addProcess(this.inputProcess, this.inputDetail).subscribe(
      data => {
        this.inputProcess = '';
        this.inputDetail = '';
        this.getProcessList();
      },
      error => {
        alert("การเพิ่มข้อมูลเกิดข้อผิดพลาด");
        console.log("Error", error);
      }
    );
  }


  postSlip(){
     this.shippingService.addShipping( this.preorderSelect,this.statusName , this.processSelect, this.inputDateStart.getTime(), this.inputDateEnd.getTime()).subscribe(
      data => {
        console.log("POST Request is successful ", data);
        this.getPreorderList();
      },
      error => {
        alert("การเพิ่มข้อมูลเกิดข้อผิดพลาด");
        console.log("Error", error);
      }
    );
  }
}



