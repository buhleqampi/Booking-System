
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Service } from '../../interfaces/services';
import { Booking } from '../../interfaces/booking';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
    private serviceEndpoint = 'http://localhost:3000/api/services/';
    private bookingEndpoint = 'http://localhost:3000/api/bookings/'

    constructor(private http: HttpClient) {}

    getServices(): Observable<Service[]> {
        return this.http.get<{ services: Service[] }>(`${this.serviceEndpoint}all/`).pipe(
            map((response) => response.services) // Extract the services array from the API response
        );
    }

    getServiceById(id: string): Observable<any> {
        return this.http.get<Service>(`${this.serviceEndpoint}${id}`);
      }
    bookService(bookingData: Booking){
        console.log(bookingData.business);
        console.log(bookingData.user);
        console.log(bookingData.service);
        
        return this.http.post<Booking>(this.bookingEndpoint, bookingData);
    }
}
