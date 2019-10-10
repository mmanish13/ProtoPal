import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import { uploadStatus } from './../upload-protocol/upload-protocol.component';


@Component({
  selector: 'app-active-draft-protocol',
  templateUrl: './active-draft-protocol.component.html',
  styleUrls: ['./active-draft-protocol.component.scss']
})
export class ActiveDraftProtocolComponent implements OnInit {
  showprotocol : boolean;
  showpop = true;
  therapauticArea ;
  phase;
  studyType;
  src = "./assets/Prot_SAP_50.pdf";
  fileToUpload: File = null;
  showpdf = false;

  constructor(private router: Router){}
  upload() : void {   
  
     this.router.navigate(["Upload-Protocol"]);         
  }
  UploadProtocol()
  {
    
    this.showprotocol = true;
    this.showpop = false;
    this.therapauticArea = '';
    this.studyType = '';
    this.phase = '';
  }
Upload()
{
  this.showpdf = true;
}
  cancel()
  {
    this.therapauticArea = '';
    this.studyType = '';
    this.phase = '';
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
}
  ngOnInit() {
    
  }

}
