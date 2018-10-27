package com.sut.sa.g21.controller;
import java.util.Collection;
import java.util.Optional;
import com.sut.sa.g21.entity.User;
import com.sut.sa.g21.entity.Preorder;
import com.sut.sa.g21.entity.Product;
import com.sut.sa.g21.entity.Status;
import com.sut.sa.g21.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.sut.sa.g21.repository.PreorderRepository;
import com.sut.sa.g21.repository.StatusRepository;
import com.sut.sa.g21.repository.UserRepository;
import java.util.Map;
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class PreorderSystemController{
    @Autowired private ProductRepository productRepository;
    @Autowired private StatusRepository statusRepository;
    @Autowired private UserRepository userRepository;
    @Autowired private PreorderRepository preorderRepository;
    // --------------- status ------------------

    @GetMapping("/Status")
    public Collection<Status> status(){
        return statusRepository.findAll();
    }
    
    @GetMapping("/Status/{statusId}")
    public Optional<Status> takeinStatusByid(@PathVariable Long statusId ){
        return statusRepository.findById(statusId);
    }

    // ---------------  Product ---------------

    // @GetMapping("/Product")
    // public Collection<Product> product(){
    //     return productRepository.findAll();
    // }
    
    // @GetMapping("/Product/{productID}")
    // public Optional<Product> takeinProductByid(@PathVariable Long productID ){
    //     return productRepository.findById(productID);
    // }

    // ---------------  User ---------------

    // @GetMapping("/User")
    // public Collection<User> user(){
    //     return userRepository.findAll();
    // }
    
    // @GetMapping("/User/{userID}")
    // public Optional<User> takeinUserByid(@PathVariable Long userId ){
    //     return userRepository.findById(userId);
    // }
    // ---------------  Preorder ---------------

    @GetMapping("/Preorder")
    public Collection<Preorder> preorder(){
        return preorderRepository.findAll();
    }
    
    @GetMapping("/Preorder/{userName}")
    public  Collection<Preorder> takeinPreorderByid(@PathVariable String userName){
        User user = userRepository.findByuserUsername(userName);
        Collection<Preorder> preorder = preorderRepository.findByUser(user);
        return preorder;
    }
    @PostMapping("/newPreorder/{userName}/{productId}")
    public Preorder newPreorder(@PathVariable String userName,@PathVariable Long productId,@RequestBody() Map<String,Object> body){                     
        Preorder newPreorder = new Preorder();
        Product product = productRepository.findById(productId).get(); 
        User user = userRepository.findByuserUsername(userName);
        Status status = statusRepository.findById(1L).get();
        newPreorder.setOrderStatus(false);
        newPreorder.setAmount(Long.valueOf(body.get("amount").toString()));
        newPreorder.setSumPrice(Double.valueOf(body.get("sumPrice").toString()));
        newPreorder.setStatus(status);
        newPreorder.setProduct(product);
        newPreorder.setUser(user);
        return preorderRepository.save(newPreorder);
    }

}
