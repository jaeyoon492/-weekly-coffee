package com.weeklycoffee.partner.subscribe;

import com.weeklycoffee.partner.product.Product;

import com.weeklycoffee.partner.subscribe.request.SubscribeRequest;
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
    public void receiveSubscribe(SubscribeRequest subscribeRequest){
        saveSubscribe(subscribeRequest);
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
    public Subscribe saveSubscribe(SubscribeRequest subRequest) {

        int total = 0;
        for (SubscribeRequest.SubscribeDetail reqDetail : subRequest.getSubscribeDetails()) {
            total += (reqDetail.getTerm() * reqDetail.getProductPrice()) * reqDetail.getOrderQuantity();
        }

        Subscribe toSubscribe = Subscribe.builder()
                .subscribeDate(subRequest.getSubscribeDate())
                .subscriberId(subRequest.getSubscriberId())
                .subscriberName(subRequest.getSubscriberName())
                .subscriberPhone(subRequest.getSubscriberPhone())
                .cardNumber(subRequest.getCardNumber())
                .location(subRequest.getLocation())
                .deliveryMemo(subRequest.getDeliveryMemo())
                .totalPayment(total)
                .orderCheck(false)
                .createdTime(new Date().getTime())
                .build();

        Subscribe saveSubscribe = subscribeRepo.save(toSubscribe);

        List<SubscribeDetail> toSubscribeDetail = new ArrayList<SubscribeDetail>();
        List<Long> partnersId = new ArrayList<>();
        for (SubscribeRequest.SubscribeDetail reqDetail : subRequest.getSubscribeDetails()) {
            SubscribeDetail detail = SubscribeDetail.builder()
                    .SubscribeId(saveSubscribe.getId()) // 상위 레코드의 id값
                    .seq(subRequest.getSubscribeDetails().indexOf(reqDetail) + 1) // 주문 제품 순번
                    .product(Product.builder().id(reqDetail.getProductId()).build()) // 주문 제품
                    .productName(reqDetail.getProductName())
                    .productPrice(reqDetail.getProductPrice())
                    .partnerId(reqDetail.getPartnerId())
                    .beanAmount(reqDetail.getBeanAmount())
                    .term(reqDetail.getTerm())
                    .orderQuantity(reqDetail.getOrderQuantity())
                    .groundPoint(reqDetail.getGroundPoint())
                    .processing(reqDetail.getProcessing())
                    .productImageId(reqDetail.getProductImageId())
                    .build();

            partnersId.add(reqDetail.getPartnerId());

            toSubscribeDetail.add(detail);
        }
        List<SubscribeDetail> saveSubscribeDetails = subscribeDetailRepo.saveAll(toSubscribeDetail);

        saveSubscribe.setDetails(saveSubscribeDetails);
//        subscribeController.addSubscribe(saveSubscribe,partnersId);

        return saveSubscribe;
    }
}
