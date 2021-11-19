package com.weeklycoffee.partner.domain.profit;

import static com.weeklycoffee.partner.domain.profit.QProfit.profit;

import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
@Data
public class ProfitRepositorySupport {

    private JPAQueryFactory query;

    @Autowired
    public ProfitRepositorySupport(EntityManager em) {
        this.query = new JPAQueryFactory(em);
    }

    public List<TotalPaymentByDateAndPartnerId> searchByPartnerIdAndDate(long partnerId, String date) {
        List<TotalPaymentByDateAndPartnerId> payments = query
                .select(Projections.fields(TotalPaymentByDateAndPartnerId.class, profit.orderDate, profit.totalProfit.sum().as("totalPayment")))
                .from(profit)
                .where(profit.orderDate.like(date + "%").and(profit.partnerId.eq(partnerId)))
                .groupBy(profit.orderDate)
                .orderBy(profit.orderDate.asc())
                .fetch();
        if (payments == null) {
            return null;
        } else {
            return payments;
        }
    }
}
// 
//select * from profit p where order_date = '2021-11-18' and partner_id = 1 order by profit_number desc;