package com.sut.sa.g21.entity;
import javax.persistence.*;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import lombok.*;
@Entity
@Getter @Setter
@Table(name="Stock")
public class Stock{

    @Id
	@SequenceGenerator(name="stock_seq",sequenceName="stock_seq")       
    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator="stock_seq")      
	@Column(name="stockId",unique = true, nullable = true)
    private @NonNull Long stockId;

    // Stock --> Product
    @ManyToOne()
    @JoinColumn(name= "productId")
    private Product product;
    
    // Stock --> Warehouse
    @ManyToOne()   
    @JoinColumn(name= "warehouseId")     
    private Warehouse warehouse;    

    // Stock --> OrderProduct
    @OneToOne
    @JoinColumn(name = "orderProductId")
    private OrderProduct orderProduct;

    public Stock(){}

    public void setProductId(Product id) {
        this.product = id;
    }
    public void setWarehouseId(Warehouse id) {
        this.warehouse = id;
    }
    public void setOrderProductId(OrderProduct id) {
        this.orderProduct = id;
    }

}