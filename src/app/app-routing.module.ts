import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientComponent } from './patient/patient.component';
import { AdminComponent } from './admin/admin.component';
import { PatientstabComponent } from './patientstab/patientstab.component';
import { AppointmentComponent } from './appointment/appointment.component';

const routes: Routes = [
{path:'admin', component:AdminComponent},
{path:'patient/:pid', component:PatientComponent},
{path:'patientstab' , component:PatientstabComponent},
{path:'appointment/:pid', component:AppointmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
