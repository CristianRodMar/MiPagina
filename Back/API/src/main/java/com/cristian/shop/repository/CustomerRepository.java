package com.cristian.shop.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.cristian.shop.entity.Customer;

@Repository
public interface CustomerRepository  extends JpaRepository <Customer, Long> {  

    Customer findById(@Param("id") long id);
    List<Customer> findByName(@Param("name") String name);
    Customer findByEmail(@Param("email") String email);
    void deleteByEmail(@Param("email") String email);

    @Query(value = "SELECT c FROM Customer c")
    Page<Customer> getCustomersPageable(final Pageable pageable);

}
