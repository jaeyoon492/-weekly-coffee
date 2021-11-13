package com.weeklycoffee.partner.domain.product;

import com.weeklycoffee.partner.domain.product.dto.ProductSalesSendRequest;
import com.weeklycoffee.partner.domain.registration.Registration;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.stereotype.Service;

@Service
public class ProductService {
    RabbitTemplate rabbit;

    private ProductService(RabbitTemplate rabbit) {
        this.rabbit = rabbit;
    }

    public void sendProduct(Product product) {
        rabbit.convertAndSend("partner.product.send", product);
    }

    public void sendProductSales(ProductSalesSendRequest productSalesSend) {
        rabbit.convertAndSend("partner.productSales.send", productSalesSend);
    }


}

//partner.product.send