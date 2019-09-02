package com.guli;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class EerekaApplication {
    public static void main(String[] args) {
        SpringApplication.run(EerekaApplication.class, args);
    }
}
