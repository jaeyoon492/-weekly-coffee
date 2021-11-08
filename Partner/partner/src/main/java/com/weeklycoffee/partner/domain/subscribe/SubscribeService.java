package com.weeklycoffee.partner.domain.subscribe;

import com.weeklycoffee.partner.domain.subscribe.dto.SubscribeResponse;
import com.weeklycoffee.partner.domain.product.Product;
import com.weeklycoffee.partner.domain.subscribe.subscribeDetail.SubscribeDetail;
import com.weeklycoffee.partner.domain.subscribe.subscribeDetail.SubscribeDetailRepository;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class SubscribeService {

    // subscriber -> partner (주문요청 MQ)
    @RabbitListener(queues = "subscriber.subscribe.send")
    public void receiveSubscribe(SubscribeResponse subscribe){
        System.out.println("주문요청!!!!!!!!!");
        saveSubscribe(subscribe);
    }
    
    private  SubscribeRepository subscribeRepo;
    private  SubscribeDetailRepository subscribeDetailRepo;

    @Autowired
    public SubscribeService(SubscribeRepository subscribeRepo, SubscribeDetailRepository subscribeDetailRepository) {
        this.subscribeRepo = subscribeRepo;
        this.subscribeDetailRepo = subscribeDetailRepository;
    }

    @Transactional(rollbackOn = Exception.class)
    public Subscribe saveSubscribe(SubscribeResponse subRes) {

        int total = 0;
        for (SubscribeResponse.SubscribeDetail reqDetail : subRes.getSubscribeDetails()) {
            total += (reqDetail.getTerm() * reqDetail.getProductPrice()) * reqDetail.getOrderQuantity();
        }

        Subscribe toSubscribe = Subscribe.builder()
                .subscribeId(subRes.getSubscribeId())
                .partnerId(subRes.getPartnerId())
                .subscribeDate(subRes.getSubscribeDate())
                .subscriberId(subRes.getSubscriberId())
                .subscriberName(subRes.getSubscriberName())
                .subscriberPhone(subRes.getSubscriberPhone())
                .cardNumber(subRes.getCardNumber())
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
                    .product(Product.builder().productId(reqDetail.getProductId()).build()) // 주문 제품
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
