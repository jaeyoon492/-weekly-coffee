package com.weeklycoffee.partner.domain.subscribe.subscribeDetail;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SubscribeDetailRepository extends JpaRepository<SubscribeDetail, SubscribeDetailId> {

}
