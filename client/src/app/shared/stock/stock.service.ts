import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Form } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  public API = '//localhost:8080';

  constructor(private http: HttpClient) { }

  getStock(): Observable<any> {
    return this.http.get(this.API + '/Stocks');
  }

  getProduct(): Observable<any> {
    return this.http.get(this.API + '/Products');
  }

  getOrderProduct(): Observable<any> {
    return this.http.get(this.API + '/OrderProducts');
  }

  getWarehouse(): Observable<any> {
    return this.http.get(this.API + '/Warehouses');
  }

  getPreorder(): Observable<any> {
    return this.http.get(this.API + '/Preorder');
  }

  public addOrder(ordProductId:number, ordProductAmount:number, ordTotalPrice:number, ordPreorderId:number, ordWarehouseId:number) {
    return this.http.post(this.API + '/addOrderProduct/'+ordProductId+'/'+ordProductAmount+'/'+ordTotalPrice+'/'+ordPreorderId+'/'+ordWarehouseId,{
      "productId":ordProductId,
      "productAmount":ordProductAmount,
      "totalPrice":ordTotalPrice,
      "preorderId":ordPreorderId,
      "warehouseId":ordWarehouseId
    });
  }

  public addNewProduct(product: Form): Observable<any> {
    let result;
    result = this.http.post(this.API + '/Products/addProduct' , product);
    return result;
  }

  public addProduct2(product: Form): Observable<any> {
    let result;
    result = this.http.post(this.API + '/Products/addProduct2' , product);
    return result;
  }

  /*
  public editProduct(editProductId:number, editNewProductName:string, editProductDetail:string, editProductImgUrl:string, editProductPrice:number):Observable<any> {
    return this.http.put(this.API + '/Products/editProduct/' + editProductId + '/' + editNewProductName + '/' + editProductDetail + '/' + editProductImgUrl + '/' + editProductPrice, {
      'editProductName': editProductId,
      'editNewProductName': editNewProductName,
      'editProductDetail': editProductDetail,
      'editProductImgUrl': editProductImgUrl,
      'editProductPrice': editProductPrice
    });
  }
  */

  public editProduct2(editProductData: Form): Observable<any> {
    let result;
    result = this.http.put(this.API + '/Products/editProduct2', editProductData);
    return result;
  }

  public movProduct(orderProductId: number, warehouseId: number) {
    return this.http.put(this.API + '/movProduct/' + orderProductId + '/' + warehouseId, {
      "orderProductId": orderProductId,
      "warehouseId": warehouseId
    });
  }
}
