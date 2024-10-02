import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../services/booking/booking.service';
import { Booking } from '../../interfaces/booking';  

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  bookings: Booking[] = [];

  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
    this.getBookings();
  }

  getBookings(): void {
    this.bookingService.getAllBookings().subscribe({
      next: (data: any) => {
        this.bookings = data.bookings;
        console.log(data)
      },
      error: (error) => {
        console.error('Error fetching bookings:', error);
      }
    })
  }
      
 


  createBooking(): void {
    
    console.log('Create booking clicked');
    // this.router.navigate(['/create-booking']);
  }
}
