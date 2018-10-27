package com.sut.sa.g21.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.sut.sa.g21.controller.SqlTimeDeserializer;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NonNull;
import lombok.ToString;

import javax.persistence.*;
import java.sql.*;

@Data
@ToString
@EqualsAndHashCode
@Entity
public class Payment {
    @Id
    @SequenceGenerator(name="payment_seq",sequenceName="payment_seq")
    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator="payment_seq")
    @Column(name = "payment_id") private Long id;
    private @NonNull
    Date date;
    @JsonFormat(pattern = "HH:mm")
    @JsonDeserialize(using = SqlTimeDeserializer.class)
    private Time time;
    private @NonNull double amount;
    private String note;
    private Timestamp submitTime;

    public Payment(Date date,Time time,double amount,String note){
        this.date = date;
        this.time = time;
        this.amount = amount;
        this.note = note;
    }

    @OneToOne(cascade = CascadeType.ALL)
    public StorageFile storageFile;

    @OneToOne(cascade = CascadeType.ALL)
    public Preorder preorderEntity;

    public Long getId(){
        return  this.id;
    }

    public void setStorageFile(StorageFile storageFile) {
        this.storageFile = storageFile;
    }

    public Date getDate() {
        return date;
    }

    public double getAmount() {
        return amount;
    }

    public String getNote() {
        return note;
    }

    public Time getTime() {
        return time;
    }

    public void setSubmitTime(Timestamp submitTime) {
        this.submitTime = submitTime;
    }

    public void setPreorder(Preorder preorderEntity) {
        this.preorderEntity = preorderEntity;
    }

}
