import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsComponent } from './components/bookings/bookings.component';
import { SingleServiceComponent } from './components/single-service/single-service.component';
import { ServiceComponent } from './components/service/service.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
// import { BookingComponent } from './components/booking/booking.component';
// import { ClientComponent } from './components/client/client.component';
// import { BusinessDashboardComponent } from './components/business-dashboard/business-dashboard.component';
// import { LoginComponent } from './components/login/login.component';
// import { StaffComponent } from './components/staff/staff.component';

const routes: Routes = [
  {path: '', redirectTo:'home' , pathMatch: 'full'},
  {path : 'bookings',component:BookingsComponent},
  {path: 'service', component:ServiceComponent},
  {path: 'service/:id', component: SingleServiceComponent},
  {path: 'home', component: HomeComponent},
  {path: 'header', component: HeaderComponent},
  // {path : 'booking', component: BookingComponent},
  // {path : 'clients', component: ClientComponent},
  // {path : 'dashboard',component:BusinessDashboardComponent},
  // {path : 'login', component: LoginComponent},
  // {path : 'staff',component:StaffComponent},
  // {path : 'login', component: LoginComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


