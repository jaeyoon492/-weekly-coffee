package com.weeklycoffee.partner.domain.profit;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class Profit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long profitNumber;

    private long partnerId;
    private int totalProfit;
    private String orderDate;

}
