import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { BookingService } from './services/booking/booking.service';
import { Test01Component } from './test01/test01.component';  
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BookingsComponent,
    Test01Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    // provideHttpClient(withFetch()),
    provideClientHydration(),
    BookingService,
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
