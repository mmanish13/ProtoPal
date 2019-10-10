import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-protomeasures',
  templateUrl: './protomeasures.component.html',
  styleUrls: ['./protomeasures.component.scss']
})
export class ProtomeasuresComponent implements OnInit {
public   overallrisk = true;
  public treatmentarm : boolean ;

  constructor() { }

  ngOnInit() {
  }
  overallRisk()
  {
this.overallrisk = true;
this.treatmentarm = false;
  }
  treatmentArm()
{

  this.overallrisk = false;
  this.treatmentarm = true;
}


}
