package com.sut.sa.g21.controller;
import java.util.Optional;
import java.util.Map;
import java.util.stream.Collectors;
import com.fasterxml.jackson.core.JsonParseException;
import org.springframework.beans.factory.annotation.Autowired;
import java.io.IOException;
import java.util.Collection;
import org.springframework.web.bind.annotation.*;
import com.sut.sa.g21.entity.*;
import com.sut.sa.g21.repository.*;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ReviewSystemController {
    @Autowired
    private ReviewRepository reviewRepository;
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private SuggestionRepository suggestionRepository;
    @Autowired
    private UserRepository userRepository;
    
    // --------------- Review ------------------

    @GetMapping("/Review")
    public Collection<Review> review(){
        return reviewRepository.findAll().stream().collect(Collectors.toList());
    }
    @GetMapping("/Review/{reviewId}")
    public Optional<Review> takeinReviewByid(@PathVariable Long reviewId ){
        return reviewRepository.findById(reviewId);
    }
   
    @PostMapping("/Review/createReview/{userId}/{productId}/{suggestionId}")
    public Review createComment(@PathVariable Long productId,@PathVariable Long userId,@PathVariable Long suggestionId,
                           @RequestBody Map<String,String> datacomment)throws JsonParseException,IOException {

        String jsonScore = datacomment.get("scoreSelect");
        String jsonComment = datacomment.get("inputComment");


        Review rv = new Review();

        rv.setProduct(productRepository.findById(productId).get());
        rv.setUser(userRepository.findById(userId).get());
        rv.setComment(jsonComment);
        rv.setScore(Long.valueOf(jsonScore));
        rv.setSuggestion(suggestionRepository.findById(suggestionId).get());
        return reviewRepository.save(rv);
    }

   
    
    // // --------------- Product ------------------

    // @GetMapping("/Product")
    // public Collection<Product> Product(){
    //     return productRepository.findAll().stream().collect(Collectors.toList());
    // }
    // @GetMapping("/Product/{productId}")
    // public Optional<Product> takeinProductByid(@PathVariable Long productId ){
    //     return productRepository.findById(productId);
    // }

    // --------------- Suggestion ------------------

    @GetMapping("/Suggestion")
    public Collection<Suggestion> Suggestion(){
        return suggestionRepository.findAll().stream().collect(Collectors.toList());
    }
    @GetMapping("/Suggestion/{suggestionId}")
    public Optional<Suggestion> takeinSuggestionByid(@PathVariable Long suggestionId ){
        return suggestionRepository.findById(suggestionId);
    }

    // --------------- User ------------------

    // @GetMapping("/User")
    // public Collection<User> User(){
    //     return userRepository.findAll().stream().collect(Collectors.toList());
    // }
    // @GetMapping("/User/{userId}")
    // public Optional<User> takeinUserByid(@PathVariable Long userId ){
    //     return userRepository.findById(userId);
    // }
  
}