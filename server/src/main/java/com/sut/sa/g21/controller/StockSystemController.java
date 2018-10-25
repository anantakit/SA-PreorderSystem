package com.sut.sa.g21.controller;
import java.util.Collection;
import java.util.Optional;
import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sut.sa.g21.entity.*;
import com.sut.sa.g21.repository.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class StockSystemController {
    @Autowired private OrderProductRepository orderProductRepository;
    @Autowired private StockRepository stockRepository;
    @Autowired private ProductRepository productRepository;
    @Autowired private WarehouseRepository warehouseRepository;
    @Autowired private PreorderRepository PreorderRepository;

    // OrderProduct
    @GetMapping("/OrderProducts")
    public Collection<OrderProduct> orderProducts() {
        return orderProductRepository.findAll();
    }
        
    // Stock
    @GetMapping("/Stocks")
    public Collection<Stock> stocks() {
        return stockRepository.findAll();
    }
    

    // Product
    @GetMapping("/Products")
    public Collection<Product> products() {
        return productRepository.findAll();
    }
    @GetMapping("/Products/{productId}")
    public Optional<Product> takeinProductByid(@PathVariable Long productId ) {
        return productRepository.findById(productId);
    }
    @PostMapping("/Products/addProduct/{productName}/{productDetail}/{productImgUrl}/{productPrice}")
    public Product addProduct(@PathVariable String productName, @PathVariable String productDetail, @RequestBody String productImgUrl, @PathVariable double productPrice) {
       Product newProduct = new Product();
       newProduct.setProductName(productName);
       newProduct.setProductDetail(productDetail);
       newProduct.setProductImgUrl(productImgUrl);
       newProduct.setProductPrice(productPrice);
       return productRepository.save(newProduct);
    }
    @PostMapping("/Products/addProduct2")
    public Product addProduct2(@RequestBody() Map<String,Object> body) {
       Product newProduct = new Product();
       newProduct.setProductName(body.get("productName").toString());
       newProduct.setProductDetail(body.get("productDetail").toString());
       newProduct.setProductImgUrl(body.get("productImgUrl").toString());
       newProduct.setProductPrice(Double.valueOf(body.get("productPrice").toString()));
       return productRepository.save(newProduct);
    }
    @PutMapping("/Products/editProduct/{productId}/{newProductName}/{productDetail}/{productImgUrl}/{productPrice}")
    public Product editProduct(@PathVariable Long productId, @PathVariable String newProductName, @PathVariable String productDetail, @PathVariable String productImgUrl, @PathVariable double productPrice) {
        Product editProduct =  productRepository.findById(productId).get();
        editProduct.setProductName(newProductName);
        editProduct.setProductDetail(productDetail);
        editProduct.setProductImgUrl(productImgUrl);
        editProduct.setProductPrice(productPrice);
        return productRepository.save(editProduct);
    }
    
    @PutMapping("/Products/editProduct2")
    public Product editProduct2(@RequestBody() Map<String,Object> body) {
        Optional<Product> editProduct = productRepository.findById(Long.valueOf(body.get("productId").toString()));
        editProduct.get().setProductName(body.get("productName").toString());
        editProduct.get().setProductImgUrl(body.get("productImgUrl").toString());
        editProduct.get().setProductPrice(Double.valueOf(body.get("productPrice").toString()));
        editProduct.get().setProductDetail(body.get("productDetail").toString());
       return productRepository.save(editProduct.get());
    }
    
    // Warehouse
    @GetMapping("/Warehouses")
    public Collection<Warehouse> warehouses() {
        return warehouseRepository.findAll();
    }
    @GetMapping("/Warehouses/{warehouseId}")
    public Optional<Warehouse> takeinWarehouseByid(@PathVariable Long warehouseId) {
        return warehouseRepository.findById(warehouseId);
    }
    
    /*
    @PostMapping("/addOrderProduct")
    public OrderProduct addOrderProducts(@PathVariable double TotalPrice, @PathVariable Long PreOderNo, @PathVariable int ProductAmount) {
        OrderProduct newOrderProduct = new OrderProduct();
        newOrderProduct.setTotalPrice(TotalPrice);
        newOrderProduct.setPreOrderId(PreOderNo);
        newOrderProduct.setAmount(ProductAmount);
        return orderProductRepository.save(newOrderProduct);
    }
    */
    @PostMapping("/addStock")
    public Stock addStocks(@PathVariable Product productId, @PathVariable Warehouse warehouseId) {
        Stock newStock = new Stock();
        newStock.setProductId(productId);
        newStock.setWarehouseId(warehouseId);
        return stockRepository.save(newStock);
    }

    
    
    @PostMapping("/addOrderProduct/{productId}/{productAmount}/{totalPrice}/{preId}/{warehouseId}")
    public Stock newOrderProduct(OrderProduct newOrder, @PathVariable Long productId, @PathVariable int productAmount, @PathVariable double totalPrice, @PathVariable Long preId, @PathVariable Long warehouseId) {
        Optional<Product> takeProduct = productRepository.findById(productId);
        Optional<Warehouse> takeWarehouse = warehouseRepository.findById(warehouseId);
        Optional<Preorder> takePreorder = PreorderRepository.findById(preId);
        takePreorder.get().setOrderStatus(true);
        newOrder.setAmount(productAmount);
        newOrder.setTotalPrice(totalPrice);
        newOrder.setPreorder(takePreorder.get());
        orderProductRepository.save(newOrder);

        Optional<OrderProduct> takeOrderProduct = orderProductRepository.findById(newOrder.getOrderProductId());
        Stock newStock = new Stock();
        newStock.setProductId(takeProduct.get());
        newStock.setWarehouseId(takeWarehouse.get());
        newStock.setOrderProductId(takeOrderProduct.get());
        return stockRepository.save(newStock);
    }
    
    
    @PutMapping("/movProduct/{orderId}/{warehouseId}")
    public Stock movProduct(@PathVariable Long orderId, @PathVariable Long warehouseId) {
        Optional<OrderProduct> findOrder = orderProductRepository.findById(orderId);
        Stock findStock = stockRepository.findByOrderProduct(findOrder.get());
        Optional<Warehouse> findWarehouse = warehouseRepository.findById(warehouseId);
        findStock.setWarehouseId(findWarehouse.get());
        return stockRepository.save(findStock);
    }
    /*
    @PostMapping("/addOrderProduct/{productId}/{productAmount}/{totalPrice}/{preorderId}/{warehouseId}")
    public void newOrder(OrderProduct newOrder, @PathVariable Product productId, @PathVariable int productAmount, @PathVariable double totalPrice, @PathVariable Long preorderId, @PathVariable Warehouse warehouseId) {
        
        addOrderProducts(totalPrice, preorderId, productAmount);
        addStocks(productId, warehouseId);
        
    }
    */
    
}