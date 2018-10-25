package com.sut.sa.g21.entity;
import javax.persistence.*;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.*;

@Entity
@Getter @Setter
@Table(name = "Classification")
public class Classification{
    @Id
    @SequenceGenerator(name="Classification_seq",sequenceName="Classification_seq")               
    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator="Classification_seq")
    private @NonNull long classId;
    @Column(name="className",unique = true, nullable = true)
    private @NonNull String className;
        
    public Classification(){}
    public Classification(String className){
        this.className = className;
    }
    public Classification(long classId){
        this.classId = classId;
    } 
}