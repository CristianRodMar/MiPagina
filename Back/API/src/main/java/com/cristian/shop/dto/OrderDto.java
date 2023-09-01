package com.cristian.shop.dto;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import com.cristian.shop.entity.Customer;
import com.cristian.shop.entity.Order;
import com.cristian.shop.entity.Worker;

public class OrderDto {
    
    private Long id;
    private Customer customer;
    private Worker courier;
    private LocalDateTime orderDate;
    private BigDecimal fullPrice;
    private List<OrderDetailDto> orderItems;


    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Customer getCustomer() {
        return this.customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Worker getCourier() {
        return this.courier;
    }

    public void setCourier(Worker courier) {
        this.courier = courier;
    }

    public LocalDateTime getOrderDate() {
        return this.orderDate;
    }

    public void setOrderDate(LocalDateTime orderDate) {
        this.orderDate = orderDate;
    }

    public BigDecimal getFullPrice() {
        return this.fullPrice;
    }

    public void setFullPrice(BigDecimal fullPrice) {
        this.fullPrice = fullPrice;
    }

    public List<OrderDetailDto> getOrderItems() {
        return this.orderItems;
    }

    public void setOrderItems(List<OrderDetailDto> orderItems) {
        this.orderItems = orderItems;
    }

    public OrderDto(Order order) {
        this.id = order.getId();
        this.customer = order.getCustomer();
        this.courier = order.getCourier();
        this.orderDate = order.getOrderDate();
        this.fullPrice = order.getFullPrice();
        // Personaliza la serialización de los detalles del pedido
        this.orderItems = order.getOrderItems().stream()
                .map(OrderDetailDto::new)
                .collect(Collectors.toList());
    }

}
