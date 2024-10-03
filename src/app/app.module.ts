import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { BookingService } from './services/booking/booking.service';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { SingleServiceComponent } from './components/single-service/single-service.component';
import { CommonModule } from '@angular/common';
import { ServiceComponent } from './components/service/service.component';
import { HomeComponent } from './components/home/home.component';
import { HaircutsComponent } from './components/haircuts/haircuts.component';
import { BookingComponent } from './components/booking/booking.component';

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
    HeaderComponent,
    BottomNavComponent
  ],
  imports: [
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideClientHydration(),
    BookingService,
>>>>>>> 6929655858e650c6f3594136aaa817c083cf3a42
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
