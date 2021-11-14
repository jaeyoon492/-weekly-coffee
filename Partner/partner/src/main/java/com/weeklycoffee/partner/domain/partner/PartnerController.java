package com.weeklycoffee.partner.domain.partner;

import com.weeklycoffee.partner.domain.partner.dto.PartnerAllResponse;
import com.weeklycoffee.partner.domain.partner.dto.PartnerConnectResponse;
import com.weeklycoffee.partner.domain.partner.dto.PartnerSubscribePageResponse;
import com.weeklycoffee.partner.domain.product.Product;
import com.weeklycoffee.partner.domain.product.ProductRepository;
import com.weeklycoffee.partner.domain.product.dto.ProductPageResponse;
import com.weeklycoffee.partner.domain.subscribe.SubscribeRepository;
import com.weeklycoffee.partner.domain.subscribe.Subscribe;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.List;
import java.util.Optional;

@RestController
public class PartnerController {
    private final PartnerRepository partnerRepo;
    private final ProductRepository productRepo;
    private final SubscribeRepository subscribeRepo;

    @Autowired
    public PartnerController(PartnerRepository partnerRepo, ProductRepository productRepo, SubscribeRepository subscribeRepo) {
        this.partnerRepo = partnerRepo;
        this.productRepo = productRepo;
        this.subscribeRepo = subscribeRepo;
    }

    // 조회하려는 인물이 주체인가 . 조회하려는 물건이 주체인가
    // 예) GET /partner/products/paging/{id}?page=0&size=10
    // 등록제품 페이징 조회
    @GetMapping("/partner/products/paging/{partnerId}")
    public Page<Product> getSalesProducts(@PathVariable long partnerId, @RequestParam int size, @RequestParam int page) {
        System.out.println(partnerId);
        System.out.println(size);
        System.out.println(page);

        return productRepo.findByPartnerId(PageRequest.of(page, size, Sort.by("productId").descending()), partnerId);
    }


    // 예) GET /partners/connect/{id}?page=0&size=10
    // 접속시 등록한 제품 최신순 10개 조회
    @GetMapping("/partner/connect/{partnerId}")
    public PartnerConnectResponse getPartnerConnect(@PathVariable long partnerId, @RequestParam int size, @RequestParam int page) {
        Optional<Partner> partnerOptional = partnerRepo.findById(partnerId);
        Partner partner = partnerOptional.get();

        Page<Product> products = productRepo.findByPartnerId(PageRequest.of(page, size, Sort.by("productId").descending()), partnerId);

        return new PartnerConnectResponse(partner, products);
    }

    // 파트너 주문목록 페이징 조회
    // GET /partner/subscribes/paging/{id}?page=0&size=4
    @GetMapping("/partner/subscribes/paging/{partnerId}")
    public Page<Subscribe> getPagingSubscribesContainPartnerId(@PathVariable long partnerId, @RequestParam int size, @RequestParam int page) {
        System.out.println(partnerId);
        System.out.println(page);
        System.out.println(size);

        return subscribeRepo.findByPartnerId(PageRequest.of(page, size, Sort.by("subscribeId").descending()), partnerId);
    }

    @GetMapping("/partner/{partnerId}")
    public PartnerAllResponse getPartnerAll(@PathVariable long partnerId) {

        if (partnerId <= 0) {
            return null;
        }
        Optional<Partner> partnerOptional = partnerRepo.findById(partnerId);
        Partner partner = partnerOptional.get();

        List<Product> products = productRepo.findByPartnerConnect(partnerId);
        List<Subscribe> subscribes = subscribeRepo.findByPartnerConnect(partnerId);

        return new PartnerAllResponse(partner,subscribes, products);
    }

}
