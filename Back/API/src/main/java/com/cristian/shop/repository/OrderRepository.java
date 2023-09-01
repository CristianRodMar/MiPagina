package com.cristian.shop.repository;

import org.springframework.data.domain.Pageable;

import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cristian.shop.entity.Order;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {

    Order findById(@Param("id") long id);
    
    @Query(value = "SELECT o FROM Order o")
    Page<Order> getOrdersPageable(final Pageable pageable);

}
