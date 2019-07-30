//import { PatientComponent } from './patient/patient.component';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  MyPatient = [
    {pid:  '1',patientName: 'Reni', patientSurname : 'Selowa',age : '25',contact : '0821249875'},
    {pid:  '2',patientName: 'Kholo', patientSurname : 'Mohale',age : '30',contact : '0793645879'},
    {pid:  '3',patientName: 'Shoki', patientSurname : 'Mahowa',age : '45' ,contact : '0603147854'},
    {pid:  '4',patientName: 'lucky', patientSurname : 'Seroto',age : '50',contact : '0784587921'}
  ]

  MyAppointment = []


  NewName:string ="";
  NewPatientsurname:string ="";
  NewAge:string ="";
  NewContact:string ="";
  NewId:number;

  NewAppId:string ="";
  Newdate:string ="";
  Newreason:string ="";
  Newdoctor:string ="";
  constructor() { 

  }
 
  addPatient(NewId,NewName,NewPatientsurname,NewAge,NewContact){
  
    this.MyPatient.push({pid:NewId,patientName:NewName,patientSurname:NewPatientsurname,age:NewAge,contact:NewContact})
  }

  addAppointment(NewAppId,Newdate,Newreason,Newdoctor){
   this.MyAppointment.push({pid:NewAppId,date:Newdate,reason:Newreason,doctor:Newdoctor})

  
  }


  getMyPatient() {

      return this.MyPatient;
  }

  getMyAppointment() {
    return this.MyAppointment;
  }

  getDetails(pid){
    for (let i = 0; i => this.MyPatient.length; i++) {
     if(this.MyPatient[i].pid === pid) {
  
   return this.MyPatient[i];
     }
    }
  }

  getID(pid){
    for (let i = 0; i => this.MyPatient.length; i++) {
     if(this.MyPatient[i].pid === pid) {
  
   return this.MyPatient[i];
     }
    }
  }


  getAppID(pid){
    for (let i = 0; i < this.MyAppointment.length; i++) {
     if(this.MyAppointment[i].pid === pid) {

      //console.log("My Appointment = " +this.MyAppointment[i]);

   return this.MyAppointment[i];

     }
    }
  }

  ViewAppointment(pid){

    let SelectedAppointmentID =[]
    this.MyAppointment.forEach(Appointments =>
      {
        if(Appointments.pid == pid)
        {
          SelectedAppointmentID.push(Appointments)
        }
      })
  
      return SelectedAppointmentID
  }
  
  


}




