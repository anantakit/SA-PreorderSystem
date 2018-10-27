import { Component, OnInit, ViewChild } from '@angular/core';
import { StockService } from '../shared/stock/stock.service';
import { NgForm } from '@angular/forms';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

export interface WarehouseList {
  warehouseId;
  warehouseAddress;
  warehouseCode;
  warehouseName;
}
export interface OrderproductList {
  orderproductId: number;
  preId: number;
  preStatus: boolean;

}

export interface Order {
  orderproductId: number;
  productName:string;
  warehouseName: string;
  preId:number;
  preStatus: boolean;
}
export interface PreordersNotOrderList {
  preId: number;
  userUsername: String;
  productName:  String;
  amount: number;
  orderStatus: String;
}
@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  disOrderProductIdSelect;
  disWarehouseSelect;
  stocks: Array<any>;
  orderProducts: Array<any>;
  products: any;
  warehouses: Array<any>;
  preorders: any;

  ordProductId: number;
  ordPreorderId: number;
  ordWarehouseId: number;
  ordProductAmount: number;
  ordTotalPrice: number;

  PreordersNotOrder: Array<any>;
  ThaiWarehouseLists: Array<any>;
  AboardWarehouseLists: Array<any>;
  displayedColumns: string[] = ['orderproductId', 'preId','productName','warehouseName', 'preStatus'];
  dataSource: MatTableDataSource<OrderproductList>;
  product: any = {
    productName: '',
    productImgUrl: '',
    productDetail: '',
    productPrice: ''
  };
  editProductData: any = {
    productId: '',
    productName: '',
    productImgUrl: '',
    productDetail: '',
    productPrice: ''
  };

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private stockService: StockService) { }
  ngOnInit() {
    this.getStockList();
    this.getProductList();
    this.getWarehouseList();
    this.getPreorderList();
    this.getOrderProductList();
  }
  getStockList() {
    this.stockService.getStock().subscribe(data => {
      this.stocks = data;
      console.log(this.stocks);
      const OrderList: Order[] = [];
      console.log('meeza');
      console.log(data);
      for (let index = 0; index < data["length"]; index++) {
        OrderList.push({
          orderproductId: data[index].orderProduct.orderProductId,
          productName: data[index].product.productName,
          warehouseName: data[index].warehouse.warehouseName,
          preId: data[index].orderProduct.preorder.preId,
          preStatus: data[index].orderProduct.preorder.orderStatus
        });
        }
        this.dataSource = new MatTableDataSource(OrderList);
        this.dataSource.paginator = this.paginator;
        console.log('data source');
        console.log(this.dataSource);
    });
  }
  getOrderProductList() {
    this.stockService.getOrderProduct().subscribe(data => {
      this.orderProducts = data;
      console.log(this.orderProducts);

      // const orderProductList: OrderproductList[] = [];
      // console.log('ingetOrderProductList');

      // for (let index = 0; index < this.orderProducts["length"]; index++) {
      //   orderProductList.push({
      //     orderproductId: this.orderProducts[index].orderProductId,
      //     preId: this.orderProducts[index].preorder.preId,
      //     preStatus: this.orderProducts[index].preorder.orderStatus
      //   });
      //   }
      //   this.dataSource = new MatTableDataSource(orderProductList);
      //   this.dataSource.paginator = this.paginator;
      //   console.log('data source');
      //   console.log(this.dataSource);

    });
  }
  getProductList() {
    this.stockService.getProduct().subscribe(data => {
      this.products = data;
      console.log(this.products);
    });
  }
  getWarehouseList() {
    this.stockService.getWarehouse().subscribe(data => {
      this.warehouses = data;
      console.log(this.warehouses);
      const ThaiWarehouseLists: WarehouseList[] = [];
      const AboardWarehouseLists: WarehouseList[] = [];
      for (let index = 0; index < data['length']; index++) {
        if (data[index].warehouseAddress === 'THAI') {
          ThaiWarehouseLists.push({
            warehouseId: data[index].warehouseId,
            warehouseAddress: data[index].warehouseAddress,
            warehouseCode: data[index].warehouseCode,
            warehouseName: data[index].warehouseName
          });
        } else {
          AboardWarehouseLists.push({
            warehouseId: data[index].warehouseId,
            warehouseAddress: data[index].warehouseAddress,
            warehouseCode: data[index].warehouseCode,
            warehouseName: data[index].warehouseName
          });
        }
      }
      this.ThaiWarehouseLists = ThaiWarehouseLists;
      this.AboardWarehouseLists = AboardWarehouseLists;
      console.log(ThaiWarehouseLists);
      console.log(AboardWarehouseLists);
    });
  }

  getPreorderList() {
    this.stockService.getPreorder().subscribe(data => {
      console.log(this.preorders);
      const PreordersNotOrder: PreordersNotOrderList[] = [];
      for (let index = 0; index < data['length']; index++) {
        if (data[index].orderStatus === false) {
          PreordersNotOrder.push({
            preId: data[index].preId,
            productName: data[index].product.productName,
            userUsername: data[index].user.userUsername,
            amount: data[index].amount,
            orderStatus: data[index].orderStatus
          });
        } else {
          this.preorders = data;
        }
      }
      this.PreordersNotOrder = PreordersNotOrder;
      console.log(PreordersNotOrder);
    });
  }

  addOrder() {
    this.stockService.addOrder(this.ordProductId, this.ordProductAmount,
       this.ordTotalPrice, this.ordPreorderId, this.ordWarehouseId).subscribe(
      data => {
        alert('เพิ่มรายการสั่งซื้อเรียบร้อยแล้ว!');
        console.log('Add order success!', data);
        console.log(this.ordPreorderId);
        this.getPreorderList();
        this.ordProductId = null;
        this.ordProductAmount = null;
        this.ordTotalPrice = null;
        this.ordPreorderId = null;
        this.ordWarehouseId = null;
        this.getStockList();
      },
      error => {
        alert('ไม่สามารถทำรายการได้!');
        console.log('Error! cannot add new order', error);
      }
    );
  }
  /*
  addNewProduct(product: NgForm) {
    console.log(product);
    this.stockService.addNewProduct(product).subscribe(
      data => {
        console.log('Add new product succesfull!', data);
        this.getProductList();
        this.newProductName = '';
        this.newProductDetail = '';
        this.newProductImgUrl = '';
        this.newProductPrice = null;
        alert('Add new product succesfull!');
      },
      error => {
        console.log('Error! cannot add new product!', error);
      }
    );
  }
  */
  addProduct2(product: NgForm) {
    console.log(product);
    this.stockService.addProduct2(product).subscribe(
      data => {
        alert('เพื่มสินค้าใหม่เรียบร้อยแล้ว!');
        console.log('Add new product success!', data);
        this.getProductList();
        this.product.productName = '';
        this.product.productDetail = '';
        this.product.productImgUrl = '';
        this.product.productPrice = '';
      },
      error => {
        alert('ไม่สามารถเพื่มสินค้าใหม่ได้');
        console.log('Error! cannot add new product!', error);
      }
    );
  }

  /*
  editProduct() {
    console.log('editProduct');
    alert(this.editProductId);
    if(this.editNewProductName == '' || this.editProductDetail == '' || this.editProductImgUrl == '' || this.editProductPrice == 0) {
      alert('กรอกข้อมูลไม่ครบถ้วน กรุณากรอกข้อมูลใหม่');
    } else {
      this.stockService.editProduct(this.editProductId, this.editNewProductName, this.editProductDetail, this.editProductImgUrl, this.editProductPrice).subscribe(
        data => {
          console.log("Edit product succesfull!", data);
          this.getProductList();
          this.editNewProductName = '';
          this.editProductDetail = '';
          this.editProductImgUrl = '';
          this.editProductPrice = null;
        }
      );
    }
  }
  */

  editProduct2(editProductData: NgForm) {
    console.log(editProductData);
    if(this.editProductData.productName === '' || this.editProductData.productDetail === '' ||
     this.editProductData.editProductImgUrl === '' || this.editProductData.productPrice === '') {
      alert('กรุณากรอกข้อมูลให้ครบถ้วน');
    } else {
      this.stockService.editProduct2(editProductData).subscribe(
        data => {
          alert('แก้ไขข้อมูลสำเร็จ!');
          console.log('Edit product success!');
          this.getProductList();
          this.editProductData.productId = '';
          this.editProductData.productName = '';
          this.editProductData.productImgUrl = '';
          this.editProductData.productDetail = '';
          this.editProductData.productPrice = '';
        },
        error => {
          alert('ไม่สามารถแก้ไขข้อมูลได้');
          console.log('Error! cannot edit product!', error);
        }
      );
    }
  }

  movProduct() {
    this.stockService.movProduct(this.disOrderProductIdSelect, this.disWarehouseSelect).subscribe(
      data => {
        alert('เคลื่อนย้ายสินค้าเรียบร้อยแล้ว');
        console.log('Move product success!', data);
        this.getOrderProductList();
        this.disOrderProductIdSelect = null;
        this.disWarehouseSelect = null;
      },
      error => {
        alert('ไม่สามารถทำรายการได้');
        console.log('Error! cannot move product', error);
      }
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
