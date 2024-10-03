// business.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Business } from '../../interfaces/business';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {
  private businessEndpoint = 'http://localhost:3000/api/businesses/';

  constructor(private http: HttpClient) {}

  
  getAllBusinesses(): Observable<any> {
    return this.http.get<any>(`${this.businessEndpoint}all/`);
  }
}
