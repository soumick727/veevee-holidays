package com.example.springapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.springapp.model.Bus;
import com.example.springapp.service.BusService;

@CrossOrigin
@RestController
public class ApiController {

    @Autowired
    private BusService busService;

    @PostMapping("/addBus")
    public ResponseEntity<Bus> addBus(@RequestBody Bus bus) {
        Bus saved = busService.addBus(bus);
        if (saved != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body(saved);
        }
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }

    @GetMapping("/getAllBus")
    public ResponseEntity<List<Bus>> getAllBus() {
        List<Bus> buses = busService.getAllBuses();
        if (buses.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(buses);
    }

    @GetMapping("/getBus/{id}")
    public ResponseEntity<Bus> getBusById(@PathVariable int id) {
        Bus bus = busService.getBusById(id);
        return bus != null ? ResponseEntity.ok(bus) : ResponseEntity.notFound().build();
    }

    @PutMapping("/updateBus/{id}")
    public ResponseEntity<Bus> updateBus(@PathVariable int id, @RequestBody Bus bus) {
        Bus updated = busService.updateBus(id, bus);
        return updated != null ? ResponseEntity.ok(updated) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/deleteBus/{id}")
    public ResponseEntity<Void> deleteBus(@PathVariable int id) {
        boolean deleted = busService.deleteBus(id);
        return deleted ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }
}
