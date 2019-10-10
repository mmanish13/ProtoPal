import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upload-protocol',
  templateUrl: './upload-protocol.component.html',
  styleUrls: ['./upload-protocol.component.scss']
})
export class UploadProtocolComponent implements OnInit {
  public confirmSearch: boolean;
  studyTitle;
  studyID;
  amendmentTitle;
  therapauticArea;
  studyType;
  phase;
  
  constructor(private router: Router) { }
  UploadProtocol() {
    this.router.navigate(["Active-Draft-Protocol"]);
    this.confirmSearch = true;
  }
  reset()
  {
    this.studyTitle='';
    this.studyID='';
    this.amendmentTitle='';
    this.therapauticArea='';
    this.studyType='';
    this.phase='';
    
  }

  ngOnInit() {}

}

export class uploadStatus {
  saveprotocol: boolean = true;
}
