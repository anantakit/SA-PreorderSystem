package com.sut.sa.g21.entity;
import javax.persistence.*;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.*;

@Entity
@Getter @Setter
@Table(name = "Status")
public class Status{
    @Id
    @SequenceGenerator(name="status_seq",sequenceName="status_seq")               
    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator="status_seq")
    private @NonNull long statusId;
    private @NonNull String statusName;
    
    public Status(){}
    public Status(String statusName){
        this.statusName = statusName;
    }    
    public Status(long statusId){
        this.statusId = statusId;
    } 
}