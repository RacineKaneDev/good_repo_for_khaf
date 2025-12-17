package com.racinekanedev;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class FinancingOpportunityApplication {

	public static void main(String[] args) {
		SpringApplication.run(FinancingOpportunityApplication.class, args);
	}

}
