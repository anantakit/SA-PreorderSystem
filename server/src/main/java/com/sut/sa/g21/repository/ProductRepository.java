package com.sut.sa.g21.repository;

import com.sut.sa.g21.entity.Product;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;


@RepositoryRestResource
    public
    interface ProductRepository extends JpaRepository<Product, Long> {
}