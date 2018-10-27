package com.sut.sa.g21.repository;
import com.sut.sa.g21.entity.Suggestion;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
    public
    interface SuggestionRepository extends JpaRepository<Suggestion, Long> {
        Optional<Suggestion> findById(Long suggestionId);

		
        
}