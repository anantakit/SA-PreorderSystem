package com.sut.sa.g21.entity;
import javax.persistence.*;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.*;

@Entity
@Getter @Setter
@Table(name = "Country")
public class Country{
    @Id
    @SequenceGenerator(name="country_seq",sequenceName="country_seq")               
    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator="country_seq")
    private @NonNull long countryId;
    private @NonNull String countryName;
    
    public Country(){}
    public Country(String name){
        this.countryName = name;
    }    
    public Country(long countryId){
        this.countryId = countryId;
    } 
}