package com.sut.sa.g21.repository;
import com.sut.sa.g21.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
    public
    interface ReviewRepository extends JpaRepository<Review, Long> {
        
}