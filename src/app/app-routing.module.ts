import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsComponent } from './components/bookings/bookings.component';
import { Test01Component } from './test01/test01.component';
import { SingleServiceComponent } from './components/single-service/single-service.component';
import { ServiceComponent } from './components/service/service.component';
import { BusinessViewComponent } from './components/business-view/business-view.component';

const routes: Routes = [
  {path: '', redirectTo:'business' , pathMatch: 'full'},
  {path: 'service', component:ServiceComponent},
  {path: 'service/:id', component: SingleServiceComponent},
  {path: 'business', component: BusinessViewComponent},
  { path: 'business/:id/services', component: ServiceComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }