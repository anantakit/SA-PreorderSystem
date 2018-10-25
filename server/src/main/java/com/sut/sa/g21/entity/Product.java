package com.sut.sa.g21.entity;
import javax.persistence.*;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.*;
@Entity
@Getter @Setter
@Table(name="Product")
public class Product{ 
    @Id
    @SequenceGenerator(name="product_seq",sequenceName="product_seq")               
    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator="product_seq")
    private @NonNull Long productId;
    private @NonNull String productName;   
    private String productDetail;
    private double productPrice;
    private String productImgUrl;
    public Product(){}
    public Product(String productName){
        this.productName =productName;
    }
    public Product(long productId){
        this.productId = productId;
    }
    @ManyToOne()   
    @JoinColumn(name= "classId")     
    private Classification classification;
    
    @ManyToOne()
    @JoinColumn(name= "countryId")
    private Country country;

    @ManyToOne()
    @JoinColumn(name= "typeId")
    private Type type;

}