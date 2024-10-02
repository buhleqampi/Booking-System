import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsComponent } from './components/bookings/bookings.component';
import { Test01Component } from './test01/test01.component';

const routes: Routes = [
  {path: '', redirectTo:'bookings' , pathMatch: 'full'},
  {path : 'bookings',component:BookingsComponent},
  {path : 'test1',component:Test01Component},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }