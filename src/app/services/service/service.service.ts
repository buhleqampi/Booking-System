
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Service } from '../../models/services';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
    private apiUrl = 'http://localhost:3000/api/services/all/';

    constructor(private http: HttpClient) {}

    getServices(): Observable<Service[]> {
        return this.http.get<{ services: Service[] }>(this.apiUrl).pipe(
            map((response) => response.services) // Extract the services array from the API response
        );
    }
}
