package com.weeklycoffee.partner.partner;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PartnerController {
    private PartnerRepository repo;

    @Autowired
    public PartnerController(PartnerRepository repo){
        this.repo = repo;
    }

    @PostMapping("/partner")
    public Partner addPartner(@RequestBody Partner partner){
        return repo.save(partner);
    }
}
