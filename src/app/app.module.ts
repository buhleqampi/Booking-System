import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { BookingComponent } from './components/booking/booking.component';
import { ClientComponent } from './components/client/client.component';
import { BusinessDashboardComponent } from './components/business-dashboard/business-dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TestCompComponent } from './test-comp/test-comp.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    BookingComponent,
    ClientComponent,
    BusinessDashboardComponent,
    LoginComponent,
    RegisterComponent,
    TestCompComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
