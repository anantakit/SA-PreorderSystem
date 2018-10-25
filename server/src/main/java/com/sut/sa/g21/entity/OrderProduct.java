package com.sut.sa.g21.entity;
import javax.persistence.*;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import lombok.*;
@Entity
@Getter @Setter
@Table(name="OrderProduct")
public class OrderProduct {
    @Id
	@SequenceGenerator(name="orderproduct_seq",sequenceName="orderproduct_seq")       
    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator="orderproduct_seq")      
	@Column(name="orderProductId",unique = true, nullable = true)
	private @NonNull Long orderProductId;
    private int Amount;
    private double TotalPrice;
    
    @OneToOne
    @JoinColumn(name = "preId")
    private Preorder preorder;

    public OrderProduct(){}
    public OrderProduct(int Amount, double TotalPrice){
        this.Amount = Amount;
        this.TotalPrice = TotalPrice;
    }

} 
