import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {ShippingService} from '../shared/shipping/shipping.service';
export interface shipList {
  username: string;
  productName: string;
  userAddress: string;
  name: string;
  detail:string;
  start: Date;
  end: Date;
  province:string;
}
@Component({
  selector: 'app-show-shippingslip',
  templateUrl: './show-shippingslip.component.html',
  styleUrls: ['./show-shippingslip.component.css']
})
export class ShowShippingslipComponent implements OnInit {
  dataSource;

  displayedColumns: string[] = ['username', 'productName', 'userAddress','name', 'detail', 'start', 'end' , 'province'];
  constructor(private shippingService: ShippingService) { }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    this.getShippingList();

  }
  getShippingList(){
    this.shippingService.getShippingList().subscribe(data => {
      const shipsList: shipList[] = [];
      console.log(data)
      for (let index = 0; index < data["length"]; index++) {
        shipsList.push({
          username: data[index].preorder.user.userUsername,
          productName: data[index].preorder.product.productName,
          userAddress: data[index].preorder.user.userAddress,
          name: data[index].shippingprocess.name,
          detail: data[index].shippingprocess.detail,
          start: data[index].start,
          end: data[index].end,
          province:data[index].preorder.user.provinces.provinceName,
        });
      }
      console.log(data);
      this.dataSource = new MatTableDataSource(shipsList);
      this.dataSource.paginator = this.paginator;
    });
 }
}
