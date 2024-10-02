import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { BookingComponent } from './components/booking/booking.component';
import { ClientComponent } from './components/client/client.component';
import { BusinessDashboardComponent } from './components/business-dashboard/business-dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { TestCompComponent } from './test-comp/test-comp.component';
import { StaffComponent } from './components/staff/staff.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { BookingService } from './services/booking/booking.service';  

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    BookingComponent,
    ClientComponent,
    BusinessDashboardComponent,
    LoginComponent,
    TestCompComponent,
    StaffComponent,
    BookingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    BookingService,
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
