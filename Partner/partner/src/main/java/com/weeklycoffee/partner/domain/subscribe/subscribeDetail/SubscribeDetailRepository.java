package com.weeklycoffee.partner.domain.subscribe.subscribeDetail;

import com.weeklycoffee.partner.domain.subscribe.subscribeDetail.SubscribeDetail;
import com.weeklycoffee.partner.domain.subscribe.subscribeDetail.SubscribeDetailId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SubscribeDetailRepository extends JpaRepository<SubscribeDetail, SubscribeDetailId> {
}
