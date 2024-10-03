// business-list.component.ts

import { Component, OnInit } from '@angular/core';
import { Business } from '../../interfaces/business';
import { BusinessService } from '../../services/business/business.service';
import { Router } from '@angular/router'; // Import Router for navigation

@Component({
  selector: 'app-business-view',
  templateUrl: './business-view.component.html',
  styleUrls: ['./business-view.component.css']
})
export class BusinessViewComponent implements OnInit {
  businesses: any = [];

  constructor(private businessService: BusinessService, private router: Router) {}

  ngOnInit(): void {
    this.fetchBusinesses();
  }

  fetchBusinesses(): void {
    this.businessService.getAllBusinesses().subscribe(
      (data: any) => {
        this.businesses = data.businesses;
      },
      (error) => {
        console.error('Error fetching businesses:', error);
      }
    );
  }


  goToServices(businessId: any): void {
    
    this.router.navigate(['/business', businessId, 'services']);
  }
}
