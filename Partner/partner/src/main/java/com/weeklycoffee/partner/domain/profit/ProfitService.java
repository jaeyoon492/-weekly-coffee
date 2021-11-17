package com.weeklycoffee.partner.domain.profit;

import com.weeklycoffee.partner.domain.product.Product;
import com.weeklycoffee.partner.domain.subscribe.Subscribe;
import com.weeklycoffee.partner.domain.subscribe.SubscribeRepository;
import com.weeklycoffee.partner.domain.subscribe.subscribeDetail.SubscribeDetail;
import com.weeklycoffee.partner.domain.subscribe.subscribeDetail.SubscribeDetailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
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

//    @Scheduled(cron = "00 59 23 * * *")
//    public void collectProfit() {
//        LocalDate now = LocalDate.now();
//        System.out.println(now);
//        List<Subscribe> subscribes = subRepo.findBySubscribeDate(now.toString());
//        List<Profit> profits = new ArrayList<>();
//        for (Subscribe subscribe : subscribes) {
//            for( SubscribeDetail detail : subscribe.getDetails()  ){
//                Profit profit = Profit.builder()
//                        .orderDate(subscribe.getSubscribeDate())
//                        .p
//                        .product(Product.builder().build())
//                        .build();
//                profits.add(profit);
            }

//        }
//
//    }
//
//
//}
