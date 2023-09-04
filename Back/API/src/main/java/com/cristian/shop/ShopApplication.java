package com.cristian.shop;

// import java.util.Collections;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;
import com.cristian.shop.config.CorsConfig;

@SpringBootApplication
@Import(CorsConfig.class)
public class ShopApplication {

	// public static void main(String[] args) {
	// 	SpringApplication app = new SpringApplication(ShopApplication.class);
    //     String port = System.getenv("PORT");
    //     app.setDefaultProperties(Collections.singletonMap("server.port", port == null ? "8080" : port));
    //     app.run(args);
	// }

	public static void main(String[] args) {
		SpringApplication.run(ShopApplication.class, args);
	}

}
