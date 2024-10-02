import { Component, OnInit } from '@angular/core';
import { Services } from '../../interfaces/services';
import { ServiceService } from '../../services/service/service.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
})
export class ServiceComponent implements OnInit {
    services: Services[] = [];

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

    selectService(service: Services): void {
        return;
    }

    bookService(service: Services): void {
        return;
    }
}
