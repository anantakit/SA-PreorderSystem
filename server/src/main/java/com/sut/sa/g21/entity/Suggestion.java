package com.sut.sa.g21.entity;
import javax.persistence.Entity;
import javax.persistence.*;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import lombok.*;
@Data
@Entity
@Getter
@Setter
@Table(name = "Suggestion")
public class Suggestion {
        @Id
        @SequenceGenerator(name = "suggestion_seq", sequenceName = "suggestion_seq")
        @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "suggestion_seq")
        private @NonNull long suggestionId;
        private @NonNull String suggestionHead;
        
        public Suggestion(){}
}