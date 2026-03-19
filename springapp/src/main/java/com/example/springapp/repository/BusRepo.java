package com.example.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.springapp.model.Bus;

@Repository
public interface BusRepo extends JpaRepository<Bus, Integer> {

}
