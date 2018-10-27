package com.sut.sa.g21.controller;

import com.sut.sa.g21.entity.User;
import com.sut.sa.g21.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

    @Autowired
    UserRepository userRepository;

    @PostMapping("/login")
    @CrossOrigin(origins = "http://localhost:4200")
    public void login(@RequestBody User userInfoEntity) throws Exception {
        System.out.println(userInfoEntity.getUserUsername());
        User user = userRepository.findByuserUsername(userInfoEntity.getUserUsername());
            if (!loginAuth(user.getUserPassword().getBytes(),userInfoEntity.getUserPassword().getBytes()))
                throw new Exception();
    }

    public boolean loginAuth(byte[] userPassword,byte[] password){
        int result = 0;
        if (userPassword.length != password.length)
            return false;
        else{
            for (int i = 0; i < password.length; i++){
                result |= password[i] ^ userPassword[i];
                if (result == 1)
                    return false;
            }
        }
        return result == 0;
    }
}