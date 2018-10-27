package com.sut.sa.g21.repository;

import com.sut.sa.g21.entity.Country;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public
interface CountryRepository extends JpaRepository<Country, Long> {
    
}