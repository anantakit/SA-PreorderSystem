package com.sut.sa.g21.entity;

import javax.persistence.*;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import lombok.*;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Getter @Setter
@Table(name="Gender")
public class Gender {
    @Id
	@SequenceGenerator(name="gender_seq",sequenceName="gender_seq")       
    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator="gender_seq")      
	@Column(name="genderId",unique = true, nullable = true)
    private @NonNull int genderId;
    private @NonNull String genderName;

    public Gender(){}
    public Gender(String genderName) {
        this.genderName = genderName;
    }
    public Gender(int genderId) {
        this.genderId = genderId;
    }

} 