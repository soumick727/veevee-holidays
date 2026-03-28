import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bus } from '../model/bus.model';

@Injectable({
  providedIn: 'root'
})
export class BusService {

  apiUrl: string = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getBusData(): Observable<Bus[]> {
    return this.http.get<Bus[]>(`${this.apiUrl}/getAllBus`);
  }

  addBus(busData: Bus): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/addBus`, busData);
  }

  getBusById(id: number): Observable<Bus> {
    return this.http.get<Bus>(`${this.apiUrl}/getBus/${id}`);
  }

  updateBus(id: number, busData: Bus): Observable<Bus> {
    return this.http.put<Bus>(`${this.apiUrl}/updateBus/${id}`, busData);
  }

  deleteBus(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/deleteBus/${id}`);
  }
}