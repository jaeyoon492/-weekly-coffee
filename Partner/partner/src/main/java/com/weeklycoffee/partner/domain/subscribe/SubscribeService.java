package com.weeklycoffee.partner.domain.subscribe;

import com.weeklycoffee.partner.domain.subscribe.response.SubscribeResponse;
import com.weeklycoffee.partner.domain.product.Product;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class SubscribeService {

    @RabbitListener(queues = "subscriber.subscribe.send")
    public void receiveSubscribe(SubscribeResponse subscribe){
        saveSubscribe(subscribe);
    }
    
    private SubscribeRepository subscribeRepo;
    private SubscribeDetailRepository subscribeDetailRepo;
    private SubscribeController subscribeController;

    @Autowired
    public SubscribeService(SubscribeRepository subscribeRepo, SubscribeDetailRepository subscribeDetailRepository,SubscribeController subscribeController) {
        this.subscribeRepo = subscribeRepo;
        this.subscribeDetailRepo = subscribeDetailRepository;
        this.subscribeController = subscribeController;
    }

    @Transactional(rollbackOn = Exception.class)
    public Subscribe saveSubscribe(SubscribeResponse subReq) {

        int total = 0;
        for (SubscribeResponse.SubscribeDetail reqDetail : subReq.getSubscribeDetails()) {
            total += (reqDetail.getTerm() * reqDetail.getProductPrice()) * reqDetail.getOrderQuantity();
        }

        Subscribe toSubscribe = Subscribe.builder()
                .partnerId(subReq.getPartnerId())
                .subscribeDate(subReq.getSubscribeDate())
                .subscriberId(subReq.getSubscriberId())
                .subscriberName(subReq.getSubscriberName())
                .subscriberPhone(subReq.getSubscriberPhone())
                .cardNumber(subReq.getCardNumber())
                .location(subReq.getLocation())
                .deliveryMemo(subReq.getDeliveryMemo())
                .totalPayment(total)
                .orderCheck(false)
                .createdTime(new Date().getTime())
                .build();

        Subscribe saveSubscribe = subscribeRepo.save(toSubscribe);

        List<SubscribeDetail> toSubscribeDetail = new ArrayList<SubscribeDetail>();
        for (SubscribeResponse.SubscribeDetail reqDetail : subReq.getSubscribeDetails()) {
            SubscribeDetail detail = SubscribeDetail.builder()
                    .SubscribeId(saveSubscribe.getId()) // 상위 레코드의 id값
                    .partnerId(reqDetail.getPartnerId())
                    .seq(subReq.getSubscribeDetails().indexOf(reqDetail) + 1) // 주문 제품 순번
                    .product(Product.builder().id(reqDetail.getProductId()).build()) // 주문 제품
                    .productName(reqDetail.getProductName())
                    .productPrice(reqDetail.getProductPrice())
                    .beanAmount(reqDetail.getBeanAmount())
                    .term(reqDetail.getTerm())
                    .orderQuantity(reqDetail.getOrderQuantity())
                    .groundPoint(reqDetail.getGroundPoint())
                    .productImageId(reqDetail.getProductImageId())
                    .build();
            toSubscribeDetail.add(detail);
        }
        List<SubscribeDetail> saveSubscribeDetails = subscribeDetailRepo.saveAll(toSubscribeDetail);

        saveSubscribe.setDetails(saveSubscribeDetails);

        return saveSubscribe;
    }
}
