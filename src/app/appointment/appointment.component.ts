import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../hospital.service';
import { ActivatedRoute,ParamMap} from '@angular/router';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  AppointmentList;

  

  
  PatID;
  App;
  Array;
  ID;

  NewAppointmentId:string ="";
  Newdate:string ="";
  Newreason:string ="";
  Newdoctor:string ="";

  MyAppointment
  empty = true;
  AppointmentArray;
  PatientArray;
  NewAppointment;

  constructor(public hospitalService:HospitalService,public router:ActivatedRoute) {
    
    this.AppointmentList = this.hospitalService.getMyAppointment()
    this.PatientArray  = this.hospitalService.getMyPatient()

  
    
   }

   addAppointment(aNewAppId,aNewdate,aNewreason,aNewdoctor){
     this.hospitalService.addAppointment(aNewAppId,aNewdate,aNewreason,aNewdoctor)
     this.NewAppointment=this.hospitalService.ViewAppointment(this.ID)

     this.empty = false
    //this.NewAppointmentId='';
     this.Newdate='';
     this.Newreason='';
     this.Newdoctor='';
   }

getID(pid) {
  this.hospitalService.getID(pid);
} 

getAppID(pid) {
  this.hospitalService.getAppID(pid);

}

   ngOnInit() {
   
    this.router.paramMap.subscribe(params => {
      this.PatID = params.get('pid');
      this.Array = this.hospitalService.getID(this.PatID);

      console.log(this.Array); 
      console.log("addAppointment = " +this.PatID);
 
      console.log("My  = " +this.Array);
 
    });
    console.log(this.PatID);
    console.log("My appo = " +this.Array);


    this.router.paramMap.subscribe(params=> {this.ID=params.get('pid')
    this.NewAppointment=this.hospitalService.ViewAppointment(this.ID)})

  }


 



}

