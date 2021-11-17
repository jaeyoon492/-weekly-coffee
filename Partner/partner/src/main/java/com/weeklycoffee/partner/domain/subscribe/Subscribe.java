package com.weeklycoffee.partner.domain.subscribe;

import com.weeklycoffee.partner.domain.subscribe.subscribeDetail.SubscribeDetail;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Subscribe {
    @Id
    private long subscribeId;
    private long partnerId;

    private String subscribeDate;
    private int subscriberId;
    private String subscriberName;
    private String subscriberPhone;
    private String location;
    private String deliveryMemo;
    private int totalPayment;
    private boolean orderCheck;
    private long createdTime;


    @OneToMany //단방향 <- List<subscribeDetail>
    @JoinColumn(name = "subscribeId")
    private List<SubscribeDetail> details;
}
