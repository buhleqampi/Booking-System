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
    private bookingEndpoint = 'http://localhost:3000/api/bookings/';
    private serviceByBusiness = 'http://localhost:3000/api/business/';

    constructor(private http: HttpClient) {}

    getServices(): Observable<Service[]> {
        return this.http
            .get<{ services: Service[] }>(`${this.serviceEndpoint}all/`)
            .pipe(
                map((response) => response.services) // Extract the services array from the API response
            );
    }

    getServiceById(id: string): Observable<any> {
        return this.http.get<Service>(
            `${this.serviceEndpoint}${id}`
        );
    }

    getServicesByBusinessId(businessId: string): Observable<Service[]> {
        return this.http.get<{ services: any }>(`${this.serviceByBusiness}${businessId}/services`).pipe(
            map((response) => response.services)
        );
    }

    bookService(bookingData: Booking) {
        return this.http.post<Booking>(this.bookingEndpoint, bookingData);
    }
}
