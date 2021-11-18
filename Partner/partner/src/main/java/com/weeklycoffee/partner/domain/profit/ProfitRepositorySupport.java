package com.weeklycoffee.partner.domain.profit;

import static com.weeklycoffee.partner.domain.profit.QProfit.profit;

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
    public ProfitRepositorySupport (EntityManager em) {
        this.query = new JPAQueryFactory(em);
    }

    public List<Profit> searchByPartnerIdAndDate(long partnerId, String date){

        return query.selectFrom(profit)
                .where(profit.orderDate.contains(date)
                        .and(profit.partnerId.eq(partnerId)))
                .orderBy(profit.profitNumber.desc())
                .groupBy(profit.orderDate)
                .fetch();
    }
}
//select * from profit p where order_date = '2021-11-18' and partner_id = 1 order by profit_number desc;
