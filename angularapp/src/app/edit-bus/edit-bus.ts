import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { BusService } from '../services/bus';
import { Bus } from '../model/bus.model';

@Component({
  selector: 'app-edit-bus',
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-bus.html',
  styleUrl: './edit-bus.css'
})
export class EditBus implements OnInit {

  busData: Bus = {
    name: '',
    capacity: 0,
    servicedate: '',
    kilometer: 0,
    busType: ''
  };

  submitted: boolean = false;
  successMessage: boolean = false;
  busId!: number;

  constructor(
    private busService: BusService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.busId = Number(this.route.snapshot.paramMap.get('id'));
    this.getBusById();
  }

  getBusById() {
    this.busService.getBusById(this.busId).subscribe({
      next: (data: Bus) => {
        this.busData = data;
      },
      error: (err: any) => {
        console.error('Error fetching bus:', err);
      }
    });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.busData.name || !this.busData.capacity ||
        !this.busData.servicedate || !this.busData.kilometer ||
        !this.busData.busType) {
      return;
    }
    this.busService.updateBus(this.busId, this.busData).subscribe({
      next: (res) => {
        this.successMessage = true;
        this.submitted = false;
      },
      error: (err: any) => {
        console.error('Error updating bus:', err);
      }
    });
  }

  navigateToViewBus() {
    this.router.navigate(['/viewbus']);
  }

  cancel() {
    this.router.navigate(['/viewbus']);
  }
}