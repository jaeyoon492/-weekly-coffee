package com.weeklycoffee.partner.domain.partner;

import com.weeklycoffee.partner.domain.partner.dto.PartnerAllResponse;
import com.weeklycoffee.partner.domain.partner.dto.PartnerConnectResponse;
import com.weeklycoffee.partner.domain.partner.dto.PartnerSubscribePageResponse;
import com.weeklycoffee.partner.domain.product.Product;
import com.weeklycoffee.partner.domain.product.dto.ProductPageResponse;
import com.weeklycoffee.partner.domain.product.ProductRepository;
import com.weeklycoffee.partner.domain.subscribe.SubscribeRepository;
import com.weeklycoffee.partner.domain.subscribe.Subscribe;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

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
    public ProductPageResponse getSalesProducts(@PathVariable long partnerId, @RequestParam int size, @RequestParam int page) {
        Page<Product> products = productRepo.findByPartnerId(PageRequest.of(page, size, Sort.by("id").descending()), partnerId);

        return new ProductPageResponse(products);
    }

    // 예) GET /partners/connect/{id}?page=0&size=4
    // 접속시 등록한 제품 최신순 4개 조회
    @GetMapping("/partner/connect/{partnerId}")
    public PartnerConnectResponse getPartnerConnect(@PathVariable long partnerId, @RequestParam int size, @RequestParam int page) {
        Optional<Partner> partnerOptional = partnerRepo.findById(partnerId);
        Partner partner = partnerOptional.get();

        Page<Product> products = productRepo.findByPartnerId(PageRequest.of(page, size, Sort.by("id").descending()), partnerId);

        return new PartnerConnectResponse(partner, products);
    }

    // 파트너 주문 전체 조회 ( 안씀 )
//    @GetMapping("/partner/subscribes/{id}")
//    public List<Subscribe> getSubscribesContainPartnerId(@PathVariable long id) {
//        return subscribeRepo.findByPartnerId(id);
//    }

    // 파트너 주문목록 페이징 조회
    // GET /partner/subscribes/paging/{id}?page=0&size=4
    @GetMapping("/partner/subscribes/paging/{partnerId}")
    public PartnerSubscribePageResponse getPagingSubscribesContainPartnerId(@PathVariable long partnerId, @RequestParam int size, @RequestParam int page) {
        Optional<Partner> partnerOptional = partnerRepo.findById(partnerId);
        Partner partner = partnerOptional.get();

        Page<Subscribe> subscribePage = subscribeRepo.findByPartnerId(PageRequest.of(page, size, Sort.by("id").descending()), partnerId);

        return new PartnerSubscribePageResponse(partner, subscribePage);
    }

    @GetMapping("/partner/test/{partnerId}")
    public PartnerAllResponse getPartnerAll(@PathVariable long partnerId){
        Optional<Partner> partnerOptional = partnerRepo.findById(partnerId);
        Partner partner = partnerOptional.get();

        List<Subscribe> subscribes = subscribeRepo.findByPartnerId(Sort.by("id").descending(), partnerId);
        List<Product> products = productRepo.findByPartnerId(Sort.by("id").descending(), partnerId);
        return new PartnerAllResponse(partner, subscribes, products);
    }

    // (안씀)
//    @GetMapping("/partners")
//    public List<Partner> getPartners() {
//        return partnerRepo.findAll();
//    }

}
