package com.weeklycoffee.partner.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfiguration implements WebMvcConfigurer {
    // WebMvcConfigurer 인터페이스를 구현하면 해당 코드 안에 오버라이딩 된 함수를 읽어서 addCorsMappings을 실행
    // CORS(cross origin resource sharing) 리소스 자원이 다를때 서로 통신할수 있게끔 해주는 공유정책
    // SOP (same origin policy) 같은 리소스 자원끼리만 공유하는 정책 리소스 : 프로토콜 : http,https, 호스트: www.naver.com , 포트가 있다: 8080,3000.
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // 공유정책을 적용할 리소스.
        registry.addMapping("/**")
                // 접근을 허용하는 리소스 자원을 넣으면 된다. 아무것도 넣지 않으면, 모든 리소스를 허용한다.
                .allowedOrigins("http://localhost:3000", "http://127.0.0.1:5500/",
                        "http://ec2-54-180-141-62.ap-northeast-2.compute.amazonaws.com")
                // 접근시 허용하는 HTTP 메소드를 정의한다. POST, GET, REMOVE, PUT... | *은 전부 허용을 뜻함
                .allowedMethods("*");
    }
}
