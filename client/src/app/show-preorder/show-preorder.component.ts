import { Component, OnInit, ViewChild } from '@angular/core';
import { PreorderService } from '../shared/preorder/preorder.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';
export interface Preorder {  
  preId: number;
  productName: string;
  amount:number;
  sumPrice:number;
  status:string;
}
@Component({
  selector: 'app-show-preorder',
  templateUrl: './show-preorder.component.html',
  styleUrls: ['./show-preorder.component.css']
})
export class ShowPreorderComponent implements OnInit {
  preorder:Array<any>;
  displayedColumns: string[] = ['preId', 'productName', 'amount', 'sumPrice','status'];
  dataSource:any;
  userName = ''
  constructor(private preorderService: PreorderService) { }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    this.getPreorderList();
  }
  
  getPreorderList(){
    this.userName = localStorage.getItem('id');
    this.preorderService.getPreorderByUserName(this.userName).subscribe(data => {
    const preorderList: Preorder[] = [];
    console.log(data);
    let status = '';
    for (let index = 0; index < data["length"]; index++) {
      if(data[index].status == null)
        status = 'null'
      else
        status = data[index].status.statusName;
      preorderList.push({
        preId: data[index].preId,
        productName: data[index].product.productName,
        amount: data[index].amount,
        sumPrice: data[index].sumPrice,
        status: status,
      })
      }  
      this.dataSource = new MatTableDataSource(preorderList);
      this.dataSource.paginator = this.paginator;
    });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
