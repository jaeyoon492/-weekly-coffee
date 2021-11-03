package com.weeklycoffee.partner.partner;

import com.weeklycoffee.partner.product.Product;
import com.weeklycoffee.partner.product.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class PartnerController {
    private PartnerRepository partnerRepo;
    private ProductRepository productRepo;

    @Autowired
    public PartnerController(PartnerRepository partnerRepo, ProductRepository productRepo) {
        this.partnerRepo = partnerRepo;
        this.productRepo = productRepo;
    }

    @PostMapping("/partners")
    public Partner addPartner(@RequestBody Partner partner) {
        return partnerRepo.save(partner);
    }

    @GetMapping("/partners/{id}")
    public PartnerResponse getPartner(@PathVariable long id) {
        Optional<Partner> partnerOptional = partnerRepo.findById(id);
        Partner partner = partnerOptional.get();

        List<Product> products = productRepo.findByPartnerId(Sort.by("id").descending(), id);

        return new PartnerResponse(partner, products);
    }

    //예) GET /partners/connect/{id}?page=0&size=4
    @GetMapping("/partners/connect/{id}")
    public PartnerConnectResponse getPartnerConnect(@PathVariable long id, @RequestParam int size, @RequestParam int page) {
        Optional<Partner> partnerOptional = partnerRepo.findById(id);
        Partner partner = partnerOptional.get();

        Page<Product> products = productRepo.findByPartnerId(PageRequest.of(page, size, Sort.by("id").descending()), id);

        return new PartnerConnectResponse(partner, products);
    }

//    @GetMapping("/partners/{id}")
//    public List<Partner> getPartners(){
//        return partnerRepo.findAll();
//    }

}
