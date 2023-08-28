package com.cristian.shop.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.cristian.shop.entity.Customer;

@Repository
public interface CustomerRepository  extends JpaRepository <Customer, Long> {
    
    List<Customer> findAll();

}
