import { Component, OnInit } from '@angular/core';
import { Bus } from '../model/bus.model';
import { BusService } from '../services/bus';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-bus',
  imports: [CommonModule],
  templateUrl: './view-bus.html',
  styleUrl: './view-bus.css',
})
export class ViewBus implements OnInit {
  
  busData: Bus[] = [];
  
  constructor(private busService: BusService, private router: Router) {}

  ngOnInit(): void {
    this.getBusData();
  }

  getBusData() {
    this.busService.getBusData().subscribe({
      next: (data: Bus[]) => {
        this.busData = data;
      },
      error: (err: any) => {
        console.error('Error fetching bus data:', err);
      },
    });
  }

  editBus(id: number) {
    // Implement navigation to edit bus page or open edit form
    this.router.navigate(['/edit-bus', id]);
    
    console.log('Edit bus with ID:', id);
  }

  deleteBus(id: number) {
    if (confirm('Are you sure you want to delete this bus?')) {
      this.busService.deleteBus(id).subscribe({
        next: () => {
          this.busData = this.busData.filter((bus) => bus.id !== id);
        },
        error: (err: any) => {
          console.error('Error deleting bus:', err);
        },
      });     
    }
  }

}
