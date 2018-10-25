package com.sut.sa.g21.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import com.sut.sa.g21.entity.Gender;;

@RepositoryRestResource
public interface GenderRepository extends JpaRepository<Gender, Long> {
}