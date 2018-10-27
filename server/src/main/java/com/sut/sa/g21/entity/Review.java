package com.sut.sa.g21.entity;
import javax.persistence.Entity;
import javax.persistence.*;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.*;

@Data
@Entity
@Getter
@Setter
@Table(name = "Review")

public class Review {
        @Id
        @SequenceGenerator(name = "review_seq", sequenceName = "review_seq")
        @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "review_seq")
        private @NonNull long reviewId;
        private @NonNull Long score;
        private String comment;

        @ManyToOne(fetch = FetchType.EAGER)
        @JoinColumn(name = "productId")
        private Product product;

        @ManyToOne(fetch = FetchType.EAGER)
        @JoinColumn(name = "suggestionId")
        private Suggestion suggestion;

        @ManyToOne(fetch = FetchType.EAGER)
        @JoinColumn(name = "userId")
        private User user;

        public Review() {

        }

}