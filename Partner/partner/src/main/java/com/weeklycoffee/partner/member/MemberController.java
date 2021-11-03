package com.weeklycoffee.partner.member;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class MemberController {
    private MemberRepository repo;

    @Autowired
    public MemberController(MemberRepository repo) {
        this.repo = repo;
    }

    @PostMapping("/members")
    public Member addUser(@RequestBody Member member) {
        return repo.save(member);
    }

    @GetMapping("/members/{id}")
    public Member getMember(@PathVariable long id) {
        Optional<Member> memberOptional = repo.findById(id);
        Member member = memberOptional.get();
        return member;
    }
}
