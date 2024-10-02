import { Component, OnInit } from '@angular/core';
import { Service } from '../../interfaces/services';
import { ServiceService } from '../../services/service/service.service';
import { Booking } from '../../interfaces/booking';
import { USER_ID } from '../../constants/constants.config';
import { Router } from '@angular/router';

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
            // console.log(data)
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

    bookService(service: any, event: Event): void {
        event.stopPropagation();
        const buildBooking: Booking = {
            user: USER_ID,
            business: service.business,
            service: service._id,
            staff: "66fc0546fc87c0563f22d6e0",
            date: new Date().toISOString(),
            time: "14:30"
        };

        this.serviceService.bookService(buildBooking).subscribe(
            (res) => {
                console.log(res);
            }
        );
    }
}
