package com.cristian.shop.dto;

import com.cristian.shop.entity.Item;
import com.cristian.shop.entity.OrderDetail;

public class OrderDetailDto {
    
    private Item item;
    private Integer quantity;


    public Item getItem() {
        return this.item;
    }

    public void setItem(Item item) {
        this.item = item;
    }

    public Integer getQuantity() {
        return this.quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public OrderDetailDto(OrderDetail orderDetail) {
        this.item = orderDetail.getItem();
        this.quantity = orderDetail.getQuantity();
    }

}
