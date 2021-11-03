package com.weeklycoffee.partner.rabbittest;

import com.weeklycoffee.partner.rabbittest.request.SubscribeRequest;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TestSubscribeService {
    private RabbitTemplate rabbit;

    @Autowired
    public TestSubscribeService(RabbitTemplate rabbit){
        this.rabbit = rabbit;
    }

    public void sendSubscribeTest(SubscribeRequest testRequest){
        rabbit.convertAndSend("subscriber.subscribe.send",testRequest);
    }

}
