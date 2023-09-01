package com.cristian.shop.entity;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapsId;
import jakarta.persistence.Table;

import java.io.Serializable;

@Entity
@Table(name = "orderdetails", schema = "shop")
public class OrderDetail implements Serializable{
    
    @EmbeddedId
    private OrderDetailId id;

    @MapsId("orderId")
    @ManyToOne
    @JoinColumn(name = "order_id")
    private Order order;

    @MapsId("itemId")
    @ManyToOne
    private Item item;

    private Integer quantity;

    public OrderDetailId getId() {
        return this.id;
    }

    public void setId(OrderDetailId id) {
        this.id = id;
    }

    public Integer getQuantity() {
        return this.quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }


    public Order getOrder() {
        return this.order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

    public Item getItem() {
        return this.item;
    }

    public void setItem(Item item) {
        this.item = item;
    }

}
