package com.weeklycoffee.partner.domain.subscribe.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@AllArgsConstructor
@Builder
public class SubscribeMessage {
    private long subscribeId;
    private long partnerId;
    private boolean orderCheck;
    private String subscribeDate;
    private int totalPayment;
}
