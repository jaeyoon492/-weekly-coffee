package com.weeklycoffee.partner.domain.subscribe;


import com.weeklycoffee.partner.domain.profit.Profit;
import com.weeklycoffee.partner.domain.subscribe.dto.SubscribeMessage;
import com.weeklycoffee.partner.domain.subscribe.dto.SubscribeResponse;
import com.weeklycoffee.partner.domain.product.Product;
import com.weeklycoffee.partner.domain.subscribe.subscribeDetail.SubscribeDetail;
import com.weeklycoffee.partner.domain.subscribe.subscribeDetail.SubscribeDetailRepository;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import javax.transaction.Transactional;
import java.io.IOException;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class SubscribeService {

    RabbitTemplate rabbit;

    LocalDate now = LocalDate.now();
    private Map<String, SseEmitter> emitters = new ConcurrentHashMap<String, SseEmitter>();

    private SubscribeRepository subscribeRepo;
    private SubscribeDetailRepository subscribeDetailRepo;

    @Autowired
    public SubscribeService(SubscribeRepository subscribeRepo, SubscribeDetailRepository subscribeDetailRepository, RabbitTemplate rabbit) {
        this.subscribeRepo = subscribeRepo;
        this.subscribeDetailRepo = subscribeDetailRepository;
        this.rabbit = rabbit;
    }

    public void putEmitter(String clientId, SseEmitter emitter) {
        this.emitters.put(clientId, emitter);
    }

    public SseEmitter getEmitter(String clientId) {
        return this.emitters.get(clientId);
    }

    public void removeEmitter(String clientId) {
        this.emitters.remove(clientId);
    }

    // subscriber -> partner (주문요청 MQ)
    @RabbitListener(queues = "subscriber.subscribe.send")
    public void receiveSubscribe(SubscribeResponse subscribe) {
        Subscribe saveSubscribe = saveSubscribe(subscribe);
        SubscribeMessage sbMessage = SubscribeMessage.builder()
                .orderCheck(false)
                .partnerId(saveSubscribe.getPartnerId())
                .subscribeId(saveSubscribe.getSubscribeId())
                .subscribeDate(new Date())
                .totalPayment(saveSubscribe.getTotalPayment())
                .build();

        emitters.values().parallelStream().forEach(sseEmitter -> {
            try {
                sseEmitter.send(sbMessage);
            } catch (IOException e) {
                e.printStackTrace();
            }
        });
    }


    @Transactional(rollbackOn = Exception.class)
    public Subscribe saveSubscribe(SubscribeResponse subRes) {

        System.out.println(subRes);

        int total = 0;
        for (SubscribeResponse.SubscribeDetail reqDetail : subRes.getSubscribeDetails()) {
            total += (reqDetail.getTerm() * reqDetail.getProductPrice()) * reqDetail.getOrderQuantity() * reqDetail.getBeanAmount();
        }

        Subscribe toSubscribe = Subscribe.builder()
                .subscribeId(subRes.getSubscribeId())
                .partnerId(subRes.getPartnerId())
                .subscribeDate(now.toString())
                .subscriberId(subRes.getSubscriberId())
                .subscriberName(subRes.getSubscriberName())
                .subscriberPhone(subRes.getSubscriberPhone())
                .location(subRes.getLocation())
                .deliveryMemo(subRes.getDeliveryMemo())
                .totalPayment(total)
                .orderCheck(false)
                .createdTime(new Date().getTime())
                .build();

        Subscribe saveSubscribe = subscribeRepo.save(toSubscribe);

        List<SubscribeDetail> toSubscribeDetail = new ArrayList<SubscribeDetail>();
        for (SubscribeResponse.SubscribeDetail reqDetail : subRes.getSubscribeDetails()) {
            SubscribeDetail detail = SubscribeDetail.builder()
                    .subscribeId(saveSubscribe.getSubscribeId()) // 상위 레코드의 id값
                    .partnerId(reqDetail.getPartnerId())
                    .seq(subRes.getSubscribeDetails().indexOf(reqDetail) + 1) // 주문 제품 순번
                    .product(Product.builder().productId(reqDetail.getProductId()).partnerId(reqDetail.getPartnerId()).build()) // 주문 제품
                    .productName(reqDetail.getProductName())
                    .productPrice(reqDetail.getProductPrice())
                    .beanAmount(reqDetail.getBeanAmount())
                    .term(reqDetail.getTerm())
                    .orderQuantity(reqDetail.getOrderQuantity())
                    .groundPoint(reqDetail.getGroundPoint())
                    .productImageUrl(reqDetail.getProductImageUrl())
                    .build();
            toSubscribeDetail.add(detail);
        }

        List<SubscribeDetail> saveSubscribeDetails = subscribeDetailRepo.saveAll(toSubscribeDetail);

        saveSubscribe.setDetails(saveSubscribeDetails);

        return saveSubscribe;
    }


    public void sendCheckSubscribe(long subscribeId){
        rabbit.convertAndSend("partner.subscribeCheck.send",subscribeId);
    }

}
