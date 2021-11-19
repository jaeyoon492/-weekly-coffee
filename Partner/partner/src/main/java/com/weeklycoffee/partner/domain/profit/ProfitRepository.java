package com.weeklycoffee.partner.domain.profit;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProfitRepository extends JpaRepository<Profit, Long> {
    boolean findByPartnerId(long partnerId);
}
