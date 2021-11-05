package com.weeklycoffee.partner.rabbittest.subscriber;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TestSubscribeService {
    private final RabbitTemplate rabbit;

    @Autowired
    public TestSubscribeService(RabbitTemplate rabbit){
        this.rabbit = rabbit;
    }

    public void sendSubscribeTest(SubscribeRequest testSubscribe){
        rabbit.convertAndSend("subscriber.subscribe.send",testSubscribe);
    }

}
