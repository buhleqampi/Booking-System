
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Service } from '../../interfaces/services';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
    private servicesEndpoint = 'http://localhost:3000/api/services/';

    constructor(private http: HttpClient) {}

    getServices(): Observable<Service[]> {
        return this.http.get<{ services: Service[] }>(`${this.servicesEndpoint}all/`).pipe(
            map((response) => response.services) // Extract the services array from the API response
        );
    }

    getServiceById(id: string): Observable<any> {
        return this.http.get<Service>(`${this.servicesEndpoint}${id}`);
      }
}
