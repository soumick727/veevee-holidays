import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Bus } from '../model/bus.model';
import { BusService } from '../services/bus';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-bus',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-bus.html',
  styleUrl: './add-bus.css',
})
export class AddBus {

  busData: Bus = {
    name: '',
    capacity: 0,
    servicedate: '',
    kilometer: 0,
    busType: ''
  };

  submitted: boolean = false;
  successMessage: boolean = false;
  
  constructor(private busService: BusService, private router: Router) {}

  onSubmit() {
    this.submitted = true;
    if(!this.busData.name || !this.busData.capacity || !this.busData.servicedate || !this.busData.kilometer || !this.busData.busType) {
      return;
    }
    this.busService.addBus(this.busData).subscribe({
      next: (response) => {
        console.log('Bus added successfully', response);
        this.successMessage = true;
        this.submitted = false;
        this.busData = {
          name: '',
          capacity: 0,
          servicedate: '',
          kilometer: 0,
          busType: ''
        };
      },
      error: (error) => {
        console.error('Error adding bus', error);
      }
    });
  
        }
        navigateToViewBus() {
          this.router.navigate(['/view-bus']);
        }
  }
