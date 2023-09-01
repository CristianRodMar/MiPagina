package com.cristian.shop.controller;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cristian.shop.Tools.Helper;
import com.cristian.shop.dto.OrderDto;
import com.cristian.shop.entity.Order;
import com.cristian.shop.repository.OrderRepository;

@RestController
@RequestMapping("/shop")
public class OrderController {
  
    @Autowired
    private OrderRepository repository;

    @GetMapping("/orders")
    public List<OrderDto> getAllOrders() {
        List<Order> orders = repository.findAll();
        return orders.stream().map(OrderDto::new).collect(Collectors.toList());
    }

    @GetMapping("orders/{page}")
    public Map<String, Object> getOrdersPageable(@PathVariable("page") final Integer page) {
        Page<Order> orderPage = repository.getOrdersPageable(PageRequest.of(page, 5)); //Este 5 es para controlar el numero de resultados, no lo olvides
        Page<OrderDto> orderDtoPage = orderPage.map(OrderDto::new);
        Map<String, Object> response = Helper.convertToResponse(orderDtoPage);
        return response;
    }

}
