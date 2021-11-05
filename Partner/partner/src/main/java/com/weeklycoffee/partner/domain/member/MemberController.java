package com.weeklycoffee.partner.domain.member;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class MemberController {
    private final MemberRepository repo;

    @Autowired
    public MemberController(MemberRepository repo) {
        this.repo = repo;
    }

    @PostMapping("/members")
    public Member addUser(@RequestBody Member member) {
        return repo.save(member);
    }

    @GetMapping("/members/{memberId}")
    public Member getMember(@PathVariable long memberId) {
        Optional<Member> memberOptional = repo.findById(memberId);
        Member member = memberOptional.get();
        return member;
    }
}
