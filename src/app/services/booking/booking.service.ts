import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booking } from '../../interfaces/booking';  

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private apiUrl = `http://localhost:3000/api/bookings`;

  constructor(private http: HttpClient) { }

  createBooking(bookingData: Booking): Observable<any> {
    return this.http.post(`${this.apiUrl}/`, bookingData, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  getAllBookings(): Observable<any> {
    return this.http.get(`${this.apiUrl}/all/`, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  getBookingById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  updateBooking(id: string, updatedData: Partial<Booking>): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, updatedData, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  deleteBookingById(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  deleteAllBookings(): Observable<any> {
    return this.http.delete(`${this.apiUrl}/all/`, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }
}
