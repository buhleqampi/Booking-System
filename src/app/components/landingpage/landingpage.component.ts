import { Component } from '@angular/core';
import { Services } from '../../interfaces/services';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent {
  Services:Services[]=[]
  serviceService: any;


  ngOnInit(): void {
    this.fetchServices();
}

fetchServices(): void {
  this.serviceService.getServices().subscribe(
      (data: any) => {
          this.Services = data;
      },
      (error: any) => {
          console.error('Error fetching services', error);
      }
  );
  }

}
