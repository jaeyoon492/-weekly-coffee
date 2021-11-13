package com.weeklycoffee.partner.domain.subscribe;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@Controller
public class SubscribeController {

    private SubscribeService service;

    private Map<String, String> clientConnectMap = new HashMap<>();

    @Autowired
    public SubscribeController(SubscribeService service) {
        this.service = service;
    }

    @GetMapping("/event/{clientId}")
    public SseEmitter connectEvent(@PathVariable String clientId) {

        SseEmitter emitter = service.getEmitter(clientId);
        if (emitter != null) {
            service.removeEmitter(clientId);
        }

        emitter = new SseEmitter(-1L);

        service.putEmitter(clientId, emitter);

        try {
            emitter.send("connect");

        } catch (IOException e) {
            e.printStackTrace();
        }

        return emitter;
    }
}
