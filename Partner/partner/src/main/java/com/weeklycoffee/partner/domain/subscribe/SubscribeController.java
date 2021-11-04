package com.weeklycoffee.partner.domain.subscribe;

import com.weeklycoffee.partner.domain.partner.PartnerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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
