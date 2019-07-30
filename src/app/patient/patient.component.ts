import { Component, OnInit, OnDestroy } from '@angular/core';
import { HospitalService } from '../hospital.service';
import { ActivatedRoute,ParamMap} from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})


export class PatientComponent implements OnInit{


  id;
  PatientArray;
   //info;
 
  
   constructor(public hospitalService:HospitalService,public router:ActivatedRoute) {
    this.PatientArray  = this.hospitalService.getMyPatient()

   

      }

      getDetails(pid) {
        this.hospitalService.getDetails(pid);
      } 




  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      this.id = params.get('pid');
      this.PatientArray = this.hospitalService.getDetails(this.id);
      console.log(this.PatientArray);
    });
    console.log(this.id);


  }

}
