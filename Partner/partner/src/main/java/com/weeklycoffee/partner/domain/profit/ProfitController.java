package com.weeklycoffee.partner.domain.profit;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProfitController {

    private ProfitRepositorySupport profitRepositorySupport;

    @Autowired
    ProfitController(ProfitRepositorySupport profitRepositorySupport) {
        this.profitRepositorySupport = profitRepositorySupport;
    }

    @GetMapping(value = "profits/{partnerId}/{date}")
    public List<Profit> getProfits(@PathVariable long partnerId, @PathVariable String date) {
        return profitRepositorySupport.searchByPartnerIdAndDate(partnerId, date);
    }

}
