import { Component, OnInit } from '@angular/core';
import { Service } from '../../interfaces/services';
import { ServiceService } from '../../services/service/service.service';
import { Booking } from '../../interfaces/booking';
import { USER_ID } from '../../constants/constants.config';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
})
export class ServiceComponent implements OnInit {
    services: Service[] = [];

    constructor(private serviceService: ServiceService, private router: Router) {}

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

    selectService(service: any): void {
        this.router.navigate(['/service', service._id])
    }

    bookService(service: Service): void {
        const buildBooking: Booking = {
            user: USER_ID,
            business: service.businessId,
            service: service.id,
            staff: "66fc0546fc87c0563f22d6e0",
            date: Date.now().toString(),
            time: ""
        }
    }
}
