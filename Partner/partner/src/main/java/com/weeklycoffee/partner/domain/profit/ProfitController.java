package com.weeklycoffee.partner.domain.profit;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
public class ProfitController {
    private ProfitRepository profitRepository;
    private ProfitRepositorySupport profitRepositorySupport;

    @Autowired
    ProfitController(ProfitRepositorySupport profitRepositorySupport, ProfitRepository profitRepository) {
        this.profitRepositorySupport = profitRepositorySupport;
        this.profitRepository = profitRepository;
    }

    @GetMapping(value = "profits/{partnerId}/{date}")
    public List<TotalPaymentByDateAndPartnerId> getProfits(@PathVariable long partnerId, @PathVariable String date) {
        return profitRepositorySupport.searchByPartnerIdAndDate(partnerId, date);
    }

}
