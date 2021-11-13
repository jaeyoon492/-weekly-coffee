package com.weeklycoffee.partner.domain.registration;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.stereotype.Service;

@Service
public class RegistrationService {



    RabbitTemplate rabbit;

    private RegistrationService(RabbitTemplate rabbit) {
        this.rabbit = rabbit;
    }

    public void sendRegistration(Registration registration) {
        rabbit.convertAndSend("partner.registration.send", registration);
    }

}
