package com.weeklycoffee.partner.product;

import com.weeklycoffee.partner.partner.PartnerController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.transaction.Transactional;
import java.util.Date;

@RestController
public class ProductController {
    private ProductRepository productRepo;
    private PartnerController partnerController;

    @Autowired
    public ProductController(ProductRepository productRepo,PartnerController partnerController) {
        this.productRepo = productRepo;
        this.partnerController = partnerController;
    }

    @Transactional(rollbackOn = Exception.class)
    @PostMapping("/products/{id}")
    public Product createProduct(@PathVariable long id, @RequestBody Product product) {
        Product productItem = Product.builder()
                .productName(product.getProductName())
                .productUploadDate(new Date().getTime())
                .productPrice(product.getProductPrice())
                .productImageId(product.getProductImageId())
                .salesStatus(0)
                .foodType(product.getFoodType())
                .expirationData(product.getExpirationData())
                .manufacturer(product.getManufacturer())
                .manufacturingDate(product.getManufacturingDate())
                .companyName(product.getCompanyName())
                .companyIntroduce(product.getCompanyIntroduce())
                .companyAddress(product.getCompanyAddress())
                .companyContact(product.getCompanyContact())
                .beanType(product.getBeanType())
                .beanTag(product.getBeanTag())
                .processing(product.getProcessing())
                .country(product.getCountry())
                .region(product.getRegion())
                .farm(product.getFarm())
                .cupNote(product.getCupNote())
                .roastingPoint(product.getRoastingPoint())
                .variety(product.getVariety())
                .build();

        Product productResponse = productRepo.save(productItem);
        partnerController.saveProduct(id,productItem);

        return productResponse;
    }
}
