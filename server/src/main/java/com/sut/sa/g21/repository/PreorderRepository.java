package com.sut.sa.g21.repository;

import com.sut.sa.g21.entity.Preorder;
import com.sut.sa.g21.entity.Status;
import com.sut.sa.g21.entity.User;

import java.util.Collection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;


@RepositoryRestResource
    public
    interface PreorderRepository extends JpaRepository<Preorder, Long> {
        Collection<Preorder> findByUser(User userId);
        Collection<Preorder> findByStatus(Status Status);
}