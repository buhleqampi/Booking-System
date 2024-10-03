import { Component } from '@angular/core';
import { ServiceService } from '../../services/service/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

    services: any = [];

    constructor(private service: ServiceService) {}

    ngOnInit(): void {
        this.getServices();
    }
    getServices() {
      this.service.getServices().subscribe({
        next: (data) => {
          this.services = data.slice(-4);
          console.log(this.services);
        },
        error: (err) => {
          console.error('Error fetching services', err);
        }
      });
    }
    
    }
