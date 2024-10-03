import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Booking } from '../../interfaces/booking';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent {
  bookingForm: FormGroup;

  constructor(private fb: FormBuilder) {     
    this.bookingForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      contact: [''],
      description: ['', Validators.required],
      logo: [null],
      services: ['', Validators.required],
    });
  }

  onFileSelect(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.bookingForm.patchValue({ logo: file });
    }
  }

  onSubmit() {
    if (this.bookingForm.valid) {
      const bookingData: Booking = this.bookingForm.value;

      // bookingData.services = bookingData.services.split(',').map((service: string) => service.trim());

      console.log('Booking Data:', bookingData);
    } else {
      console.log('Form is invalid');
    }
  }
}