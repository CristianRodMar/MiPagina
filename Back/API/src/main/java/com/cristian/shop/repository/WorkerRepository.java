package com.cristian.shop.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cristian.shop.entity.Worker;

@Repository
public interface WorkerRepository  extends JpaRepository <Worker, Long> {  

    Worker findById(@Param("id") long id);
    List<Worker> findByName(@Param("name") String name);
    
    @Query(value = "SELECT w FROM Worker w")
    Page<Worker> getCustomersPageable(final Pageable pageable);

}
