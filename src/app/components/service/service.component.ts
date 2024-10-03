import { Component, OnInit } from '@angular/core';
import { Service } from '../../interfaces/services';
import { ServiceService } from '../../services/service/service.service';
import { Booking } from '../../interfaces/booking';
import { USER_ID } from '../../constants/constants.config';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
})
export class ServiceComponent implements OnInit {
    services: Service[] = [];
    businessId: any;

    constructor(private serviceService: ServiceService, private router: Router, private route: ActivatedRoute, private location: Location) {
        this.businessId = this.route.snapshot.params['id'];
    }

    ngOnInit(): void {
        this.fetchServices();
    }

    fetchServices(): void {
        this.serviceService.getServicesByBusinessId(this.businessId).subscribe(
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

    goBack(): void {
        this.location.back();
      }
}
