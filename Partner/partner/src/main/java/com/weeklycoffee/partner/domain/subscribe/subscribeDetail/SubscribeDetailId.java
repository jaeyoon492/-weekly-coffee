package com.weeklycoffee.partner.domain.subscribe.subscribeDetail;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SubscribeDetailId implements Serializable {

    private static final long serialVersionUID = 4115897150946242178L;

    private long subscribeId;
    private int seq;
}
