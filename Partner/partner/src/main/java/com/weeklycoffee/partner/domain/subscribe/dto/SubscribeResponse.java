package com.weeklycoffee.partner.domain.subscribe.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SubscribeResponse {

    private long partnerId;
    private long subscribeId;
    private String subscribeDate;
    private int subscriberId;
    private String subscriberName;
    private String subscriberPhone;
    private String location;
    private String deliveryMemo;
    private int totalPayment;
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
