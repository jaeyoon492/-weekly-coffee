package com.weeklycoffee.partner.domain.product;

import com.weeklycoffee.partner.domain.partner.PartnerRepository;
import com.weeklycoffee.partner.domain.product.dto.ProductRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.transaction.Transactional;
import java.util.Date;

@RestController
public class ProductController {
    private ProductRepository productRepo;

    @Autowired
    public ProductController(ProductRepository productRepo) {
        this.productRepo = productRepo;
    }

    @Transactional(rollbackOn = Exception.class)
    @PostMapping("/products")
    public Product createProduct(@RequestBody ProductRequest productReq) {
        Product productItem = Product.builder()
                .partnerId(productReq.getPartnerId())
                .productName(productReq.getProductName())
                .productUploadDate(new Date().getTime())
                .productPrice(productReq.getProductPrice())
                .productImageId(productReq.getProductImageId())
                .salesStatus(0)
                .foodType(productReq.getFoodType())
                .expirationData(productReq.getExpirationData())
                .manufacturer(productReq.getManufacturer())
                .manufacturingDate(productReq.getManufacturingDate())
                .companyName(productReq.getCompanyName())
                .companyIntroduce(productReq.getCompanyIntroduce())
                .companyAddress(productReq.getCompanyAddress())
                .companyContact(productReq.getCompanyContact())
                .beanType(productReq.getBeanType())
                .beanTag(productReq.getBeanTag())
                .processing(productReq.getProcessing())
                .country(productReq.getCountry())
                .region(productReq.getRegion())
                .farm(productReq.getFarm())
                .cupNote(productReq.getCupNote())
                .roastingPoint(productReq.getRoastingPoint())
                .variety(productReq.getVariety())
                .build();

        Product productResponse = productRepo.save(productItem);
        return productResponse;
    }

}
