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
            return new ResponseEntity<>(saved, HttpStatus.OK);
        }
        else
        {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/getAllBus")
    public ResponseEntity<List<Bus>> getAllBus() {
        List<Bus> buses = busService.getAllBuses();
        if(!buses.isEmpty()) {
            return new ResponseEntity<>(buses, HttpStatus.OK);
        }
        else
        {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/getBus/{id}")
    public ResponseEntity<Bus> getBusById(@PathVariable int id) {
        Bus bus = busService.getBusById(id);
        if(bus != null) {
            return new ResponseEntity<>(bus, HttpStatus.OK);
        }
        else
        {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/updateBus/{id}")
    public ResponseEntity<Bus> updateBus(@PathVariable int id, @RequestBody Bus bus) {
        Bus updated = busService.updateBus(id, bus);
        if (updated != null) {
            return new ResponseEntity<>(updated, HttpStatus.OK);
        }
        else
        {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/deleteBus/{id}")
    public ResponseEntity<Void> deleteBus(@PathVariable int id) {
        boolean deleted = busService.deleteBus(id);
        if (deleted) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        else
        {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
