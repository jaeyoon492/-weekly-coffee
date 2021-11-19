package com.weeklycoffee.partner.domain.profit;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TotalPaymentByDateAndPartnerId {
    private String orderDate;
    private Integer totalPayment;
}
