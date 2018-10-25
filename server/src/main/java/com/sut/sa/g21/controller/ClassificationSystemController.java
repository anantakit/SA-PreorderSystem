package com.sut.sa.g21.controller;
import java.util.Collection;
import com.sut.sa.g21.entity.Classification;
import com.sut.sa.g21.entity.Country;
import com.sut.sa.g21.entity.Product;
import com.sut.sa.g21.entity.Type;
import com.sut.sa.g21.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;
import com.sut.sa.g21.repository.ClassificationRepository;
import com.sut.sa.g21.repository.CountryRepository;
import com.sut.sa.g21.repository.TypeRepository;
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ClassificationSystemController{
    @Autowired private ClassificationRepository classificationRepository;
    @Autowired private ProductRepository productRepository;
    @Autowired private CountryRepository countryRepository;
    @Autowired private TypeRepository typeRepository;

    // --------------- Classification ------------------

    @GetMapping("/Classification")
    public Collection<Classification> classification(){
        return classificationRepository.findAll();
    }
    @PostMapping("/Classification/addClassification/{className}")
    public Classification newClassification(@PathVariable String className){
        Classification newClassification = new Classification(className);
        return classificationRepository.save(newClassification);  
    }
    @DeleteMapping("DeleteClassification/{classID}")
    public void deleteClassification(@PathVariable Long classID){
        Classification target = classificationRepository.findById(classID).get();
        classificationRepository.delete(target);
    }
    @PutMapping("/Classification/{productId}/{classId}/{typeId}/{countryId}")
    public Product setClassification(@PathVariable Long productId, @PathVariable Long classId , @PathVariable Long typeId, @PathVariable Long countryId) {
        Product newProduct = productRepository.findById(productId).get();
        if(classId > 0){
            Classification newClassification = classificationRepository.findById(classId).get();
            newProduct.setClassification(newClassification); 
        }
        if(typeId > 0){
            Type newType = typeRepository.findById(typeId).get();
            newProduct.setType(newType);  
        }
        if(countryId > 0){
            Country newCountry = countryRepository.findById(countryId).get();
            newProduct.setCountry(newCountry);
        }
        return productRepository.save(newProduct);                               
    }
     // --------------- Country --------------
     @GetMapping("/Country")
     public Collection<Country> Country(){
         return countryRepository.findAll();
     }
    // --------------- Type --------------
    @GetMapping("/Type")
    public Collection<Type> Type(){
        return typeRepository.findAll();
    }

    @PostMapping("/Type/addType/{typeName}")
    public Type newType(@PathVariable String typeName){
        Type newType = new Type(typeName); 
        return typeRepository.save(newType); 
    }

    @DeleteMapping("DeleteType/{typeID}")
    public void deleteType(@PathVariable Long typeID){
        Type target = typeRepository.findById(typeID).get();
        typeRepository.delete(target);
    }
    // -----------------product---------------

    // @GetMapping("/Product")
    // public Collection<Product> product(){
    //     return productRepository.findAll();
    // }
    
    // @GetMapping("/Product/{productID}")
    // public Optional<Product> takeinProductByid(@PathVariable Long productID ){
    //     return productRepository.findById(productID);
   // }


    // @GetMapping("shopping/{search}")
    // public Collection<Product> search(@PathVariable String search) {
    //     return productRepository.findByProductNameContainingIgnoreCase(search.toUpperCase()).stream().collect(Collectors.toList());
    // }
}
