import { Component, OnInit, ViewChild } from '@angular/core';
import { ClassificationService} from '../shared/classification/classification.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';
export interface Product {  
  productId: number;
  productName: string;
  classification:string;
  country:string;
  type:string;
}
@Component({
  selector: 'app-classification',
  templateUrl: './classification.component.html',
  styleUrls: ['./classification.component.css']
})
export class ClassificationComponent implements OnInit {
  productSelect:number = 0 ; 
  classSelect:number = 0;
  typeSelect:number = 0;
  countrySelect:number = 0;
  inputClass:string = ''; 
  inputCountry:string = ''; 
  inputType:string = '';
  
  products: Array<any>;
  countrys: Array<any>;
  classifications: Array<any>;
  types: Array<any>;
  dataSource:any;
  
  displayedColumns: string[] = ['productId', 'productName', 'classification', 'country','type'];
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(private classificationService: ClassificationService) { }

  ngOnInit() {
      this.getProductList();
      this.getClassificationList();
      this.getCountryList();
      this.getTypeList();
}
  //------------Load data -------------
  getProductList(){
    this.classificationService.getProduct().subscribe(data => {
    this.products = data;
    const productList: Product[] = [];
    console.log(this.products);
    let productClassification,productType,productCountry;
    for (let index = 0; index < this.products["length"]; index++) {
      if(this.products[index].classification == null)
         productClassification = 'null';
      else
        productClassification = this.products[index].classification.className;
      if (this.products[index].country == null) 
        productCountry = 'null';
      else 
        productCountry = this.products[index].country.countryName;
      if(this.products[index].type == null)
        productType = 'null'
      else
        productType = this.products[index].type.typeName;
      productList.push({
        productId: this.products[index].productId,
        productName: this.products[index].productName,
        classification: productClassification,
        country: productCountry,
        type: productType,
      })
      }  
      this.dataSource = new MatTableDataSource(productList);
      this.dataSource.paginator = this.paginator;
    });
  }

  getTypeList(){
    this.classificationService.getTypes().subscribe(data => {
      this.types = data;
      console.log(this.types);
    });
  }

  getCountryList(){
    this.classificationService.getCountry().subscribe(data => {
      this.countrys = data;
      console.log(this.countrys);
    });
  }

  getClassificationList(){
    this.classificationService.getClassification().subscribe(data => {
      this.classifications = data;
      console.log(this.classifications);
    });
    
  }
//------------------------------------------------------------------------------------------------------

  updateProduct(){
    if(this.productSelect == 0){
      alert('กรุณากรอกชื่อสินค้า');
    }
    else{
      this.classificationService.putClassificationAll(this.productSelect,this.classSelect,this.typeSelect,this.countrySelect).subscribe(
        data => {
          alert("จัดหมวดหมู่แล้ว");
          console.log('update Success');
          this.productSelect = 0;
          this.classSelect = 0;
          this.typeSelect = 0;
          this.countrySelect = 0;
          this.getProductList();
      },
        error => {
          alert('จัดหมวดหมู่ล้มเหลว');
          console.log('Error', error);
        }
      );
        console.log('Product : ' +this.productSelect);
        console.log('classification : ' +this.classSelect);
        console.log('type : '+this.typeSelect);
        console.log('country : '+this.countrySelect);
    }
  }
  //เพิ่มหมวดหมู่
  addClassification(){
    this.classificationService.addClassification(this.inputClass).subscribe(
      data => {
        alert('เพิ่ม '+this.inputClass+" แล้ว");
        console.log('POST Request is successful ', data);
        this.getClassificationList();
        this.inputClass = '';
      },
      error => {
        alert('เพิ่มข้อมูลไม่สำเร็จอาจป้อนข้อมูลซ้ำ');
        console.log('Error', error);
      }
    );    
  }
  //เพิ่มประเภท
  addType(){
    this.classificationService.addType(this.inputType).subscribe(
      data => {
        alert('เพิ่ม '+this.inputType+' แล้ว');
        console.log('POST Request is successful ', data);
        this.getTypeList();
        this.inputType = '';
      },
      error => {
        alert('เพิ่มข้อมูลไม่สำเร็จอาจป้อนข้อมูลซ้ำ');
        console.log('Error', error);
      }
    );
}
  //ค้นหา
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}