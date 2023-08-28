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
import com.cristian.shop.entity.Worker;
import com.cristian.shop.repository.WorkerRepository;

@RestController
@RequestMapping("/shop")
public class WorkerController {
    
    @Autowired
    private WorkerRepository repository;

    @GetMapping("/workers")
    public List<Worker> getAllWorkers() {
        return repository.findAll();
    }

    @GetMapping("/workers/{page}")
    public ResponseEntity<?> getWorkersPageable(@PathVariable("page") final Integer page) {
        return ResponseEntity.ok(Helper.convertToResponse(repository.getCustomersPageable(PageRequest.of(page, 5))));
    }

    @GetMapping("/worker/id/{id}")
    public Worker findById(@PathVariable("id") long id) {
        return repository.findById(id);
    }

    @GetMapping("/worker/name/{name}")
    public List<Worker> findByName(@PathVariable("name") String name) {
        return repository.findByName(name);
    }

    @PostMapping("/worker")
    public Worker createWorker(@RequestBody Worker worker) {
        return repository.save(worker);
    }

    @PutMapping("/worker/{id}")
    public Worker updateWorker(@PathVariable long id, @RequestBody Worker worker) {
        return repository.save(worker);
    }

    @DeleteMapping("/worker/{id}")
    public void deleteWorkerById(@PathVariable("id") long id) {
        repository.deleteById(id);
    }
}
