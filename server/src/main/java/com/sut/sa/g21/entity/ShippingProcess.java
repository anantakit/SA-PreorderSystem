package com.sut.sa.g21.entity;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.*;
@Entity
@Getter @Setter
@Table(name = "ShippingProcess")
public class ShippingProcess {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private @NonNull
    Long shippingProcessId;
    private @NonNull
    String name;
    private @NonNull
    String detail;
    
    public ShippingProcess() {
    }

    public ShippingProcess(String name, String detail) {

        this.name = name;
        this.detail = detail;
    }


}
