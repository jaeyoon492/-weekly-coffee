package com.weeklycoffee.partner.domain.profit;

import com.weeklycoffee.partner.domain.product.Product;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class Profit {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private long profitNumber;

    private int totalPayment;
    private Date orderDate;

    @ManyToOne
    @Cascade(value = CascadeType.DELETE)
    private Product product;
}
