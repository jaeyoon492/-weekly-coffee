package com.weeklycoffee.partner.rabbittest.admin.confirm;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestPartnerConfirmController {

   private TestPartnerConfirmService service;

   @Autowired
   public TestPartnerConfirmController(TestPartnerConfirmService service){
       this.service = service;
   }

    @PostMapping("/confirm-test")
    public PartnerConfirmRequest confirmPartner(@RequestBody PartnerConfirmRequest testRequest){

       service.sendPartnerRequest(testRequest);
       return testRequest;
    }
}
