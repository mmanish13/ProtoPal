import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-protocol',
  templateUrl: './view-protocol.component.html',
  styleUrls: ['./view-protocol.component.scss']
})
export class ViewProtocolComponent implements OnInit {

  selectedAll: any;;
  measures= [
    { selected: false,title:"The RIGHT study: Risk stratification with Image Guidance of HMG coa reductase inhibitor Therapy", id: "ZEU-DGU-242CE", area :"Cardiovascular"},
    { selected: false,title:"Assessment of prospective CYP2C19 genotype guided Dosing of Anti-Platelet Therapy in Percutaneous Coronary Intervention (ADAPT)", id: "KSZ-3T3KU8Z", area :"Cardiovascular"},
    { selected: false,title:"A Phase 1, Single Ascending Dose, Randomized, Double-Blind, Placebo-Controlled Study to Evaluate the Safety, Tolerability, Pharmacokinetics, and Pharmacodynamics of Xisomab 3G3 in Healthy Adult Subjects", id: "3G3-15-01", area :"Cardiovascular"},
    { selected: false,title:"Endovascular exclusion of  Abdominal Aortic Aneursyms in high risk patients", id: "KZHG-YIEGND1214", area :"Cardiovascular"},
 
];
  
  constructor(private router: Router) { }
  ngOnInit() {
  }
  generateRisk()
  {
    this.router.navigate(["About"]);
  }

  selectAll() {
    for (var i = 0; i < this.measures.length; i++) {
      this.measures[i].selected = this.selectedAll;
    }
  }
  checkIfAllSelected() {
    this.selectedAll = this.measures.every(function(item:any) {
        return item.selected == true;
      })
  }
}
