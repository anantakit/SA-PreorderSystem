
package com.sut.sa.g21.controller;
import com.sut.sa.g21.entity.Gender;
import com.sut.sa.g21.entity.User;
import com.sut.sa.g21.repository.GenderRepository;
import com.sut.sa.g21.repository.ProvinceRepository;
import com.sut.sa.g21.repository.UserRepository;

import java.util.*;
import java.util.Collection;
import java.util.stream.Collector;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserController {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private GenderRepository genderRepository;
    @Autowired private ProvinceRepository provinceRepository;
    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/Users")
    public Collection<User> users() {
        return userRepository.findAll();
    }
    @GetMapping("/User/{userID}")
    public Optional<User> takeinUserByid(@PathVariable Long userId ){
        return userRepository.findById(userId);
    }
    

    @PostMapping("/Register")
    public User registerUser(@RequestBody() Map<String,Object> body) {
        User regis = new User(Integer.valueOf(body.get("Gender").toString()));
        regis.setUserUsername(body.get("Username").toString());
        regis.setUserPassword(body.get("Password").toString());
        regis.setUserFirstName(body.get("FirstName").toString());
        regis.setUserLastName(body.get("LastName").toString());
        regis.setUserAddress(body.get("Address").toString());
        regis.setUserEmail(body.get("Email").toString());
        regis.setUserTelephone(body.get("Telephone").toString());
        regis.setProvinces((provinceRepository.findById(Long.valueOf(body.get("Province").toString())).get()));
        return userRepository.save(regis);
    }

    @GetMapping("/Genders")
    public Collection<Gender> genders() {
        return genderRepository.findAll();
    }

}
