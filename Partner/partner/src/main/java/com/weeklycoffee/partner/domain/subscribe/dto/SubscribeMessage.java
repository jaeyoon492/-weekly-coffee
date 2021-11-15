package com.weeklycoffee.partner.domain.subscribe.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;
import java.util.Date;

@Data
@AllArgsConstructor
@Builder
public class SubscribeMessage {
    private long subscribeId;
    private long partnerId;
    private boolean orderCheck;
    private Date subscribeDate;
    private int totalPayment;
}
