package com.cristian.shop.repository;

import org.springframework.data.domain.Pageable;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cristian.shop.entity.Item;

@Repository
public interface ItemsRepository extends JpaRepository<Item, Long> {

    Item findById(@Param("id") long id);
    List<Item> findByName(@Param("name") String name);

    @Query(value = "SELECT i FROM Item i")
    Page<Item> getItemsPageable(final Pageable pageable);
}
