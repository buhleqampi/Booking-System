import { Component, OnInit } from '@angular/core';
import { Service } from '../../interfaces/services';
import { ServiceService } from '../../services/service/service.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
})
export class ServiceComponent implements OnInit {
    services: Service[] = [];

    constructor(private serviceService: ServiceService) {}

    ngOnInit(): void {
        this.fetchServices();
    }

    fetchServices(): void {
    this.serviceService.getServices().subscribe(
        (data) => {
            this.services = data;
        },
        (error) => {
            console.error('Error fetching services', error);
        }
    );
    }

    selectService(service: Service): void {
        return;
    }

    bookService(service: Service): void {
        return;
    }
}
