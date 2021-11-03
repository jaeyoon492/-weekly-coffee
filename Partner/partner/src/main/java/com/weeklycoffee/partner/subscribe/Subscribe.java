package com.weeklycoffee.partner.subscribe;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Subscribe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @OneToMany //단방향 <- List<subscribeDetail>
    @JoinColumn(name = "subscribeId")
    private List<SubscribeDetail> details;

    private long partnerId;

    private String subscribeDate;
    private int subscriberId;
    private String subscriberName;
    private String subscriberPhone;
    private String cardNumber;
    private String location;
    private String deliveryMemo;
    private int totalPayment;
    private boolean orderCheck;
    private long createdTime;
}
