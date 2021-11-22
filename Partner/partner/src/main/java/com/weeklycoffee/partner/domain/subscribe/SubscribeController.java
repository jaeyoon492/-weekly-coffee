package com.weeklycoffee.partner.domain.subscribe;

import com.weeklycoffee.partner.domain.product.Product;
import com.weeklycoffee.partner.domain.subscribe.subscribeDetail.SubscribeDetail;
import com.weeklycoffee.partner.domain.subscribe.subscribeDetail.SubscribeDetailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Controller
public class SubscribeController {

    private SubscribeRepository subscribeRepository;
    private SubscribeService service;
    private SubscribeDetailRepository subscribeDetailRepository;

    private Map<String, String> clientConnectMap = new HashMap<>();

    @Autowired
    public SubscribeController(SubscribeService service, SubscribeRepository subscribeRepository, SubscribeDetailRepository subscribeDetailRepository) {
        this.service = service;
        this.subscribeRepository = subscribeRepository;
        this.subscribeDetailRepository = subscribeDetailRepository;
    }

    @GetMapping("/event/{clientId}")
    public SseEmitter connectEvent(@PathVariable String clientId) {

        SseEmitter emitter = service.getEmitter(clientId);
        if (emitter != null) {
            service.removeEmitter(clientId);
        }

        emitter = new SseEmitter(-1L);

        service.putEmitter(clientId, emitter);

        try {
            emitter.send("connect");

        } catch (IOException e) {
            e.printStackTrace();
        }

        return emitter;
    }


    @PutMapping(value = "/subscribe/product/{subscribeId}")
    @ResponseBody
    public boolean removeProductInDetail (@PathVariable long subscribeId ) {
        Optional<Subscribe> subscribeOptional = subscribeRepository.findById(subscribeId);

        Subscribe subscribe =  subscribeOptional.get();
        subscribe.setOrderCheck(true);

        subscribeRepository.save(subscribe);



        return true;
    }
}
