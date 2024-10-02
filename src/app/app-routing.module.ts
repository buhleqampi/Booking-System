import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { BookingComponent } from './components/booking/booking.component';
import { ClientComponent } from './components/client/client.component';
import { BusinessDashboardComponent } from './components/business-dashboard/business-dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { StaffComponent } from './components/staff/staff.component';
import { BookingsComponent } from './components/bookings/bookings.component';

const routes: Routes = [
  {path: '', redirectTo:'bookings' , pathMatch: 'full'},
  {path : 'home', component: LandingpageComponent},
  {path : 'booking', component: BookingComponent},
  {path : 'clients', component: ClientComponent},
  {path : 'dashboard',component:BusinessDashboardComponent},
  {path : 'login', component: LoginComponent},
  {path : 'register',component:RegisterComponent},
  {path : 'staff',component:StaffComponent},
  {path : 'bookings',component:BookingsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

