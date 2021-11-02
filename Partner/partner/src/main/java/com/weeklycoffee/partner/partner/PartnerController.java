package com.weeklycoffee.partner.partner;

import com.weeklycoffee.partner.product.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class PartnerController {
    private PartnerRepository repo;

    @Autowired
    public PartnerController(PartnerRepository repo){
        this.repo = repo;
    }

    @PostMapping("/partners")
    public Partner addPartner(@RequestBody Partner partner){
        return repo.save(partner);
    }

   @GetMapping("/partners/{id}")
    public Partner getPartner(@PathVariable long id){
        Optional<Partner> partnerOptional = repo.findById(id);
       Partner partner = partnerOptional.get();
       return partner;
   }

    @GetMapping("/partners")
    public List<Partner> getPartners(){
        return repo.findAll();
    }

    public void saveProduct(long id, Product product){
        Optional<Partner> partnerOptional = repo.findById(id);
        Partner partner = partnerOptional.get();
        partner.getProducts().add(product);
        repo.save(partner);
    }
}
