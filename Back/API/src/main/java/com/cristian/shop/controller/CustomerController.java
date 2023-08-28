package com.cristian.shop.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cristian.shop.Tools.Helper;
import com.cristian.shop.entity.Customer;
import com.cristian.shop.repository.CustomerRepository;

@RestController
@RequestMapping("/shop")
public class CustomerController {

    @Autowired
    private CustomerRepository repository;

    @GetMapping("/customers")
    public List<Customer> getAllCustomers() {
        return repository.findAll();
    }

    @GetMapping("/customers/{page}")
    public ResponseEntity<?> getCustomersPageable(@PathVariable("page") final Integer page) {
        return ResponseEntity.ok(Helper.convertToResponse(repository.getCustomersPageable(PageRequest.of(page, 5))));
    }

    @GetMapping("/customer/id/{id}")
    public Customer findById(@PathVariable("id") long id) {
        return repository.findById(id);
    }

    @GetMapping("/customer/name/{name}")
    public List<Customer> findByName(@PathVariable("name") String name) {
        return repository.findByName(name);
    }

    @GetMapping("/customer/email/{email}")
    public Customer findByEmail(@PathVariable("email") String email) {
        return repository.findByEmail(email);
    }

    @PostMapping("/customer")
    public Customer createCustomer(@RequestBody Customer customer) {
        return repository.save(customer);
    }

    @PutMapping("/customer/{id}")
    public Customer updateCustomer(@PathVariable long id, @RequestBody Customer customer) {
        return repository.save(customer);
    }

    @Transactional
    @DeleteMapping("/customer/id/{id}")
    public void deleteCustomerById(@PathVariable("id") long id) {
        repository.deleteById(id);
    }

    @Transactional
    @DeleteMapping("/customer/email/{email}")
    public void deleteCustomerByEmail(@PathVariable("email") String email) {
        repository.deleteByEmail(email);
    }
}
