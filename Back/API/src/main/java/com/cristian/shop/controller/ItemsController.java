package com.cristian.shop.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cristian.shop.Tools.Helper;
import com.cristian.shop.entity.Item;
import com.cristian.shop.repository.ItemsRepository;

@RestController
@RequestMapping("/shop")
public class ItemsController {

    @Autowired
    private ItemsRepository repository;

    @GetMapping("/items")
    public List<Item> getAllItems() {
        return repository.findAll();
    }

    @GetMapping("/items/{page}")
    public ResponseEntity<?> getItemsPageable(@PathVariable("page") final Integer page) {
        return ResponseEntity.ok(Helper.convertToResponse(repository.getItemsPageable(PageRequest.of(page, 5))));
    }

    @GetMapping("/item/id/{id}")
    public Item findById(@PathVariable("id") long id) {
        return repository.findById(id);
    }

    @GetMapping("/item/name/{name}")
    public List<Item> findByName(@PathVariable("name") String name) {
        return repository.findByName(name);
    }

    @PostMapping("/item")
    public Item createItem(@RequestBody Item item) {
        return repository.save(item);
    }

    @PutMapping("/item/{id}")
    public Item updateItem(@PathVariable long id, @RequestBody Item item) {
        return repository.save(item);
    }

    @DeleteMapping("/item/{id}")
    public void deleteItemById(@PathVariable("id") long id) {
        repository.deleteById(id);
    }

}
