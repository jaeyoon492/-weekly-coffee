package com.weeklycoffee.partner.member;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MemberController {
    private MemberRepository repo;

    @Autowired
    public MemberController(MemberRepository repo){
        this.repo = repo;
    }

    @PostMapping("/user")
    public Member addUser(@RequestBody Member member){
        return repo.save(member);
    }
}
