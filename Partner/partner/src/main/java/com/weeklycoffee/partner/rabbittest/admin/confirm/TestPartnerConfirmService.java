package com.weeklycoffee.partner.rabbittest.admin.confirm;

import com.weeklycoffee.partner.rabbittest.admin.confirm.PartnerConfirmRequest;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TestPartnerConfirmService {

    private final RabbitTemplate rabbit;

    @Autowired
    public TestPartnerConfirmService(RabbitTemplate rabbit){
        this.rabbit = rabbit;
    }

    public void sendPartnerRequest(PartnerConfirmRequest testRequest){
        rabbit.convertAndSend("admin.partner.send",testRequest);
    }
}
