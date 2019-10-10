import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-protomeasures',
  templateUrl: './protomeasures.component.html',
  styleUrls: ['./protomeasures.component.scss']
})
export class ProtomeasuresComponent implements OnInit {
public   overallrisk = true;
  public treatmentarm : boolean ;
  inclusionCriteria;
  exclusionCriteria;
  finalReport;
  src = "./assets/Protopal_Final_Report.pdf";


  constructor() { }

  ngOnInit() {
  }
  overallRisk()
  {
this.overallrisk = true;
this.treatmentarm = false;
this.inclusionCriteria = false;
this.exclusionCriteria = false;
this.finalReport =false
  }
  treatmentArm()
{
  this.overallrisk = false;
  this.treatmentarm = true;
  this.inclusionCriteria = false;
  this.exclusionCriteria = false;
  this.finalReport =false
}
inclusion()
{
  this.overallrisk = false;
  this.treatmentarm = false;
  this.inclusionCriteria = true;
  this.exclusionCriteria = false;
  this.finalReport =false
}
exclusion()
{
  this.overallrisk = false;
  this.treatmentarm = false;
  this.inclusionCriteria = false;
  this.exclusionCriteria = true;
  this.finalReport =false
}
report()
{
  this.overallrisk = false;
  this.treatmentarm = false;
  this.inclusionCriteria = false;
  this.exclusionCriteria = false;
  this.finalReport =true
}
}
