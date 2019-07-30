import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../hospital.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 PatientList
 NewName:string ="";
 NewPatientsurname:string ="";
 NewAge:string ="";
 NewContact:string ="";
 NewId:string = "";

constructor( public hospitalService:HospitalService) {
this.PatientList = this.hospitalService.getMyPatient()

 }
 
 addPatient(NewId,NewName,NewPatientsurname,NewAge,NewContact){
  
this.hospitalService.addPatient(NewId,NewName,NewPatientsurname,NewAge,NewContact)
this.NewName ='';
this.NewPatientsurname ='';
this.NewAge ='';
this.NewContact ='';
this.NewId ='';
//alert("Data Inserted Successfully...")

 }
  ngOnInit() {
  }

}


