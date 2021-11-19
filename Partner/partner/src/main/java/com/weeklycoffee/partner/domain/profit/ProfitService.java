package com.weeklycoffee.partner.domain.profit;

import com.weeklycoffee.partner.domain.subscribe.Subscribe;
import com.weeklycoffee.partner.domain.subscribe.SubscribeRepository;
import com.weeklycoffee.partner.domain.subscribe.subscribeDetail.SubscribeDetail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class ProfitService {

    private SubscribeRepository subRepo;
    private ProfitRepository profitRepo;

    @Autowired
    public ProfitService(SubscribeRepository subRepo, ProfitRepository profitRepo) {
        this.subRepo = subRepo;
        this.profitRepo = profitRepo;
    }

    @Scheduled(cron = "30 59 23 * * *")
    @Transactional(rollbackOn = Exception.class)
    public void collectProfit() {
        LocalDate now = LocalDate.now();
        System.out.println(now);
        List<Subscribe> subscribes = subRepo.findBySubscribeDate(now.toString());
        List<Profit> profits = new ArrayList<>();
        for (Subscribe subscribe : subscribes) {
            if (subscribe.getSubscribeDate().equals(now.toString())) {
                for (SubscribeDetail detail : subscribe.getDetails()) {
                    Profit profit = Profit.builder()
                            .orderDate(subscribe.getSubscribeDate())
                            .totalProfit(detail.getProductPrice() * detail.getBeanAmount() * detail.getOrderQuantity() * detail.getTerm())
                            .partnerId(subscribe.getPartnerId())
                            .build();
                    profits.add(profit);
                }
            }
        }
        profitRepo.saveAll(profits);
    }

}


