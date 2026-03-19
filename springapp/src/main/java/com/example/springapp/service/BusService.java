package com.example.springapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springapp.model.Bus;
import com.example.springapp.repository.BusRepo;

@Service
public class BusService {

    @Autowired
    private BusRepo busRepo;
    
    public Bus addBus(Bus bus) {
        return busRepo.save(bus);
    }

    public Bus getBusById(int id) {
        return busRepo.findById(id).orElse(null);
    }

    public List<Bus> getAllBuses() {
        return busRepo.findAll();
    }

    public Bus updateBus(int id, Bus busDetails) {
        Bus bus = busRepo.findById(id).orElse(null);
        if (bus != null) {
            bus.setName(busDetails.getName());
            bus.setCapacity(busDetails.getCapacity());
            bus.setServicedate(busDetails.getServicedate());
            bus.setKilometer(busDetails.getKilometer());
            bus.setBusType(busDetails.getBusType());
            return busRepo.save(bus);
        }
        return null;
    }

    public boolean deleteBus(int id) {
        if (busRepo.existsById(id)) {
            busRepo.deleteById(id);
            return true;
        }
        return false;
    }
}
