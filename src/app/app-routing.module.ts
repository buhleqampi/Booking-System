
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { BookingComponent } from './components/booking/booking.component';
import { ClientComponent } from './components/client/client.component';
import { BusinessDashboardComponent } from './components/business-dashboard/business-dashboard.component';
import { LoginComponent } from './components/login/login.component';  

const routes: Routes = [
  {path: '', redirectTo:'home' , pathMatch: 'full'},
  {path : 'home', component: LandingpageComponent},
  {path : 'booking', component: BookingComponent},
  {path : 'clients', component: ClientComponent},
  {path : 'dashboard',component:BusinessDashboardComponent},
  {path : 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }