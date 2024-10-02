import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsComponent } from './components/bookings/bookings.component';
import { Test01Component } from './test01/test01.component';
import { SingleServiceComponent } from './components/single-service/single-service.component';
import { ServiceComponent } from './components/service/service.component';

const routes: Routes = [
  {path: '', redirectTo:'bookings' , pathMatch: 'full'},
  {path : 'bookings',component:BookingsComponent},
  {path : 'test1',component:Test01Component},
  {path: 'service', component:ServiceComponent},
  {path: 'service/:id', component: SingleServiceComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }