package com.weeklycoffee.partner.domain.product;

import com.weeklycoffee.partner.domain.product.dto.ProductRequest;
import com.weeklycoffee.partner.domain.product.dto.ProductSalesSendRequest;
import com.weeklycoffee.partner.files.FileController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import javax.transaction.Transactional;
import java.io.IOException;
import java.util.Date;
import java.util.Optional;

@RestController
public class ProductController {
    private ProductRepository productRepo;
    private ProductService productService;

    @Autowired
    public ProductController(ProductRepository productRepo, ProductService productService) {
        this.productRepo = productRepo;
        this.productService = productService;
    }

    @PutMapping(value = "/product/modify")
    public Product semiModifyProdudt(@RequestBody ProductRequest productRequest) {
        Optional<Product> productOptional = productRepo.findById(productRequest.getProductId());
        Product product = productOptional.get();

        product.setProductName(productRequest.getProductName());
        product.setProductPrice(productRequest.getProductPrice());

        return productRepo.save(product);
    }

    @PutMapping(value = "/product/modified/{id}")
    public Product ModifyProductItem(@RequestBody ProductRequest productRequest, @PathVariable long id, HttpServletResponse res) {
        Optional<Product> productOptional = productRepo.findById(id);
        Product product = productOptional.get();

        if (productOptional.isEmpty()) {
            res.setStatus(HttpServletResponse.SC_NOT_FOUND);
            return null;
        }

        product.setProductId(productRequest.getProductId());
        product.setProductId(productRequest.getProductId());
        product.setPartnerId(productRequest.getPartnerId());
        product.setProductName(productRequest.getProductName());
        product.setProductUploadDate(productRequest.getProductUploadDate());
        product.setProductPrice(productRequest.getProductPrice());
        product.setProductImageUrl(productRequest.getProductImageUrl());
        product.setProductInfo(productRequest.getProductInfo());
        product.setFileName(productRequest.getFileName());
        product.setFileType(productRequest.getFileType());
        product.setSalesStatus(productRequest.getSalesStatus());
        product.setFoodType(productRequest.getFoodType());
        product.setExpirationData(productRequest.getExpirationData());
        product.setManufacturer(productRequest.getManufacturer());
        product.setManufacturingDate(productRequest.getManufacturingDate());
        product.setCompanyName(productRequest.getCompanyName());
        product.setCompanyIntroduce(productRequest.getCompanyIntroduce());
        product.setCompanyAddress(productRequest.getCompanyAddress());
        product.setCompanyContact(productRequest.getCompanyContact());
        product.setBeanType(productRequest.getBeanType());
        product.setBeanTag(productRequest.getBeanTag());
        product.setProcessing(productRequest.getProcessing());
        product.setCountry(productRequest.getCountry());
        product.setRegion(productRequest.getRegion());
        product.setFarm(productRequest.getFarm());
        product.setCupNote(productRequest.getCupNote());
        product.setRoastingPoint(productRequest.getRoastingPoint());
        product.setVariety(productRequest.getVariety());


        return productRepo.save(product);
    }

//    @Transactional(rollbackOn = Exception.class)
    @PostMapping(value = "/products")
    public Product createProduct(@RequestBody ProductRequest productRequest) {

        System.out.println("프로덕트 리퀘스트" + productRequest);

        Product productItem = Product.builder()
                .productId(productRequest.getProductId())
                .partnerId(productRequest.getPartnerId())
                .productName(productRequest.getProductName())
                .productUploadDate(productRequest.getProductUploadDate())
                .productPrice(productRequest.getProductPrice())
                .productImageUrl(productRequest.getProductImageUrl())
                .productInfo(productRequest.getProductInfo())
                .fileName(productRequest.getFileName())
                .fileType(productRequest.getFileType())
                .salesStatus(productRequest.getSalesStatus())
                .foodType(productRequest.getFoodType())
                .expirationData(productRequest.getExpirationData())
                .manufacturer(productRequest.getManufacturer())
                .manufacturingDate(productRequest.getManufacturingDate())
                .companyName(productRequest.getCompanyName())
                .companyIntroduce(productRequest.getCompanyIntroduce())
                .companyAddress(productRequest.getCompanyAddress())
                .companyContact(productRequest.getCompanyContact())
                .beanType(productRequest.getBeanType())
                .beanTag(productRequest.getBeanTag())
                .processing(productRequest.getProcessing())
                .country(productRequest.getCountry())
                .region(productRequest.getRegion())
                .farm(productRequest.getFarm())
                .cupNote(productRequest.getCupNote())
                .roastingPoint(productRequest.getRoastingPoint())
                .variety(productRequest.getVariety())
                .build();

        System.out.println("프로덕트 아이템" + productItem);

        Product productResponse = productRepo.save(productItem);

        System.out.println("프로덕트 저장후" + productResponse);

        productService.sendProduct(productResponse);

        return productResponse;
    }

    @DeleteMapping(value = "/product/remove/{id}")
    public boolean removeProduct(@PathVariable long id, HttpServletResponse res) {
        Optional<Product> product = productRepo.findById(id);

        if (product.isEmpty()) {
            res.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            return false;
        }
        productRepo.deleteById(id);

        return true;
    }

    @PutMapping(value = "/product/sales/{id}")
    public int salesOnProduct(@PathVariable long id, HttpServletResponse res) {

        Optional<Product> productOptional = productRepo.findById(id);
        if (productOptional.isEmpty()) {
            res.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            return 0;
        }

        Product product = productOptional.get();
        if (product.getSalesStatus() == 0) {
            product.setSalesStatus(1);
        } else {
            product.setSalesStatus(0);
        }
        productRepo.save(product);

        productService.sendProductSales(new ProductSalesSendRequest(product.getProductId(), product.getSalesStatus()));

        return product.getSalesStatus();
    }

}
