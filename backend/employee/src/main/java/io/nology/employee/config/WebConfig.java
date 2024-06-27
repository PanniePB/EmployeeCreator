package io.nology.employee.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
  public void addCorsMappings(@SuppressWarnings("null") CorsRegistry registry) {
    String[] allowedOrigins = { "http://localhost:5174/", "http://127.0.0.1:5174/", "http://localhost:3000/",
        "http://127.0.0.1:8080/employees" };
    registry.addMapping("/**").allowedOrigins(allowedOrigins)
        .allowedMethods("GET", "POST", "PUT", "PATCH", "DELETE").allowedHeaders("*");
  }
}
