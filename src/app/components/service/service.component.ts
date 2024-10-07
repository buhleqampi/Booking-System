import { Component, OnInit } from '@angular/core';
import { Service } from '../../interfaces/services';
import { ServiceService } from '../../services/service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
})
export class ServiceComponent implements OnInit {
    services: any = [];

    constructor(private service: ServiceService) {}

    ngOnInit(): void {
        this.getServices();
    }
    getServices() {
      this.service.getServices().subscribe({
        next: (data) => {
          this.services = data.slice(-8);
          console.log(this.services);
        },
        error: (err) => {
          console.error('Error fetching services', err);
        }
      });
    }
                   
}

