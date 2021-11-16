package com.weeklycoffee.partner.domain.subscribe;

import com.weeklycoffee.partner.domain.product.Product;
import com.weeklycoffee.partner.domain.subscribe.subscribeDetail.SubscribeDetail;
import com.weeklycoffee.partner.domain.subscribe.subscribeDetail.SubscribeDetailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
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
    public SubscribeController(SubscribeService service,SubscribeRepository subscribeRepository, SubscribeDetailRepository subscribeDetailRepository) {
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
    

// 디테일에서 매출데이터만 따로 저장할 테이블이 있어야 할듯, 그리고 매출데이터에 product랑 매출 저장하고 디테일 삭제 해야 할듯 ㄷㄷ;;
//    @DeleteMapping(value = "/subscribe/product/{subscribeId}")
//    public boolean removeProductInDetail (@PathVariable long subscribeId ) {
//        Optional<Subscribe> subscribeOptional = subscribeRepository.findById(subscribeId);
//        Subscribe subscribe =  subscribeOptional.get();
//
//        List<SubscribeDetail> subscribeDetail = subscribe.getDetails();
//
//        Product product = Product.builder().build();
//
//        subscribeDetail.stream().map(item -> item.setProduct(product));
//
//
//        return true;
//    }
}
