package com.weeklycoffee.partner.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfiguration implements WebMvcConfigurer {
    // WebMvcConfigurer 인터페이스를 구현하면 해당 코드 안에 오버라이딩 된 함수를 읽어서 addCorsMappings을 실행
    // CORS(cross origin resource sharing) 정책을 설정
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // 공유정책을 적용할 리소스.
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000", "http://127.0.0.1:5500/",
                        "http://ec2-54-180-141-62.ap-northeast-2.compute.amazonaws.com")
                .allowedMethods("*");
    }
}
