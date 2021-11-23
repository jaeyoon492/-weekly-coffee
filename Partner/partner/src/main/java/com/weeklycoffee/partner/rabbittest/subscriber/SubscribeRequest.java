package com.weeklycoffee.partner.rabbittest.subscriber;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDate;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SubscribeRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int subscriberId;

    private long subscribeId;
    private long partnerId;
    private LocalDate subscribeDate;
    private String subscriberName;
    private String subscriberPhone;
    private String location;
    private String deliveryMemo;
    private List<SubscribeDetail> subscribeDetails;

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class SubscribeDetail {
        private int productId;
        private long partnerId;

        private String productName;
        private String productImageUrl;
        private int beanAmount;
        private int term;
        private String groundPoint;
        private int productPrice;
        private int orderQuantity;
    }
}
