package com.weeklycoffee.partner.domain.product;

import com.weeklycoffee.partner.domain.product.dto.ProductRequest;
import com.weeklycoffee.partner.files.FileController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.transaction.Transactional;
import java.io.IOException;
import java.util.Date;
import java.util.Optional;

@RestController
public class ProductController {
    private ProductRepository productRepo;
    private FileController fileController;

    @Autowired
    public ProductController(ProductRepository productRepo, FileController fileController) {
        this.productRepo = productRepo;
        this.fileController = fileController;
    }

    @PutMapping("/product/modify")
    public Product semiModifyProdudt(@RequestBody ProductRequest productRequest) {
        Optional<Product> productOptional = productRepo.findById(productRequest.getProductId());
        Product product = productOptional.get();

        product.setProductName(productRequest.getProductName());
        product.setProductPrice(productRequest.getProductPrice());

        return productRepo.save(product);
    }

    @Transactional(rollbackOn = Exception.class)
    @PostMapping("/products")
    public Product createProduct(@RequestBody ProductRequest productReq) {

        Product productItem = Product.builder()
                .productId(productReq.getProductId())
                .partnerId(productReq.getPartnerId())
                .productName(productReq.getProductName())
                .productUploadDate(productReq.getProductUploadDate())
                .productPrice(productReq.getProductPrice())
                .productImageUrl(productReq.getProductImageUrl())
                .fileName(productReq.getFileName())
                .fileType(productReq.getFileType())
                .salesStatus(productReq.getSalesStatus())
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
