import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { LandingpageComponent } from './components/landingpage/landingpage.component';
// import { BookingComponent } from './components/booking/booking.component';
// import { ClientComponent } from './components/client/client.component';
// import { BusinessDashboardComponent } from './components/business-dashboard/business-dashboard.component';
// import { LoginComponent } from './components/login/login.component';
// import { TestCompComponent } from './test-comp/test-comp.component';
// import { CalenderComponent } from './components/calender/calender.component';
// import { StaffComponent } from './components/staff/staff.component';
// import { ServiceComponent } from './components/service/service.component';
import { ServiceComponent } from './components/service/service.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    // LandingpageComponent,
    // BookingComponent,
    // ClientComponent,
    // BusinessDashboardComponent,
    // LoginComponent,
    // TestCompComponent,
    // CalenderComponent,
    // TestCompComponent,
    // StaffComponent,
    ServiceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
