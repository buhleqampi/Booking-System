
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../services/service/service.service';
import { Service } from '../../interfaces/services';
import { Location } from '@angular/common';

@Component({
  selector: 'app-service-detail',
  templateUrl: './single-service.component.html',
  styleUrls: ['./single-service.component.css']
})
export class SingleServiceComponent implements OnInit {
  service: any; // To store the service details
  data:any
  constructor(
    private route: ActivatedRoute,  // To get route params
    private serviceService: ServiceService  // To make service API call
  ) {}

  ngOnInit(): void {
    this.getService();
  }

  getService() {
    // Retrieve the service id from the URL parameters
    const serviceId = this.route.snapshot.paramMap.get('id');
    
    if (serviceId) {
      this.serviceService.getServiceById(serviceId).subscribe({
        next: (data) => {
          this.service = data;
          this.data = data
          console.log(this.service);
        },
        error: (err) => {
          console.error('Error fetching service details', err);
        }
      });
    } else {
      console.error('No service ID provided in the route.');
    }
  }

  goBack() {
    // Logic to go back to the previous page
    window.history.back();
  }
}
