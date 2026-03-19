package com.example.springapp.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Bus {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String name;
    private int capacity;
    private String servicedate;
    private int Kilometer;
    private String BusType;

    public Bus() {}

    public Bus(int id, String name, int capacity, String servicedate, int Kilometer, String BusType) {
        this.id = id;
        this.name = name;
        this.capacity = capacity;
        this.servicedate = servicedate;
        this.Kilometer = Kilometer;
        this.BusType = BusType;
    }

    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public int getCapacity() { return capacity; }
    public void setCapacity(int capacity) { this.capacity = capacity; }

    public String getServicedate() { return servicedate; }
    public void setServicedate(String servicedate) { this.servicedate = servicedate; }

    public int getKilometer() { return Kilometer; }
    public void setKilometer(int Kilometer) { this.Kilometer = Kilometer; }

    public String getBusType() { return BusType; }
    public void setBusType(String BusType) { this.BusType = BusType; }
}