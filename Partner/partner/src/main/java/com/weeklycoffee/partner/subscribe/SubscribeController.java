package com.weeklycoffee.partner.subscribe;

import com.weeklycoffee.partner.partner.Partner;
import com.weeklycoffee.partner.partner.PartnerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
public class SubscribeController {
    private SubscribeDetailRepository subscribeDetailRepo;
    private SubscribeRepository subscribeRepo;

    @Autowired
    public SubscribeController(SubscribeDetailRepository subscribeDetailRepo, SubscribeRepository subscribeRepo, PartnerRepository partnerRepo) {
        this.subscribeRepo = subscribeRepo;
        this.subscribeDetailRepo = subscribeDetailRepo;
    }

    @GetMapping("/subscribes")
    public List<Subscribe> getSubscribes(){
        return subscribeRepo.findAll();
    }


//    public void addSubscribe(Subscribe subscribe, List<Long>partnerId){
//        List<SubscribeDetail> list = subscribe.getDetails();
//        for()
//    }
}
