package com.sut.sa.g21.entity;
import javax.persistence.*;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.*;

@Entity
@Getter @Setter
@Table(name = "TypeProduct")
public class Type{
    @Id
    @SequenceGenerator(name="types_seq",sequenceName="types_seq")               
    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator="types_seq")
    private @NonNull long typeId;
    @Column(name="typeName",unique = true, nullable = true)
    private @NonNull String typeName;
    
    public Type(){}
    public Type(String typeName){
        this.typeName = typeName;
    }
    public Type(long typeId){
        this.typeId = typeId;
    }   
}