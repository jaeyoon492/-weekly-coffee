package com.weeklycoffee.partner.registrationform;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RegistrationFormController {

    private RegistrationFormRepository repo;

    @Autowired
    public RegistrationFormController(RegistrationFormRepository repo) {
        this.repo = repo;
    }

    @PostMapping("/registrations")
    public RegistrationForm createRegistrationForm(@RequestBody RegistrationForm registrationForm) {
        return repo.save(registrationForm);
    }
}
