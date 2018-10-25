package com.sut.sa.g21.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Collection;
import com.sut.sa.g21.entity.*;
import com.sut.sa.g21.repository.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ProvinceController {
    @Autowired private ProvinceRepository provinceRepository;

    // Province
    @GetMapping("/Provinces")
    public Collection<Province> provinces() {
        return provinceRepository.findAll();
    }
}