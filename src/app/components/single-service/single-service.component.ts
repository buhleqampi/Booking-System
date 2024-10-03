
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
  serviceId: string;
  service: any;

  constructor(private route: ActivatedRoute, private serviceService: ServiceService, private location: Location) {
    this.serviceId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.fetchService();
  }


  fetchService(): void {
    this.serviceService.getServiceById(this.serviceId).subscribe({
      next: (data: any) => {
        console.log(data.service)
        this.service = data.service;
      },error: (err: any) => {
        console.error('Error fetching service details:', err);
      }
    }
      
    );
  }

  goBack(): void {
    this.location.back();
  }
}
