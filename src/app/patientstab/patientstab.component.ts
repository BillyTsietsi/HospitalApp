import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../hospital.service';

@Component({
  selector: 'app-patientstab',
  templateUrl: './patientstab.component.html',
  styleUrls: ['./patientstab.component.css']
})
export class PatientstabComponent implements OnInit {

  PatientList

  constructor(public hostitalService:HospitalService) { 
  this.PatientList = this.hostitalService.getMyPatient()
  }

  ngOnInit() {
  }

}


//constructor( public hospitalService:HospitalService) {
  //this.PatientList = this.hospitalService.getMyPatient()
  
   //}