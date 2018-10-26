package com.sut.sa.g21.entity;
import javax.persistence.*;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.*;
import java.util.Date;
@Entity
@Getter @Setter
@Table(name = "ShippingSlip")
public class ShippingSlip {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long shippingslipId;
    private @NonNull Date start;
    private @NonNull Date end;

    @ManyToOne()
    @JoinColumn(name = "shippingProcessId")
    private ShippingProcess shippingprocess;

    @ManyToOne()
    @JoinColumn(name = "statusId")
    private Status status;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "preId", nullable = false)
    private Preorder preorder;


    public ShippingSlip() {
    }

    public ShippingSlip(Date starts, Date end) {
        this.start = starts;
        this.end = end;
    }

}