import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
 export class LoginComponent {
  hidelogin : boolean = true;
//   constructor(private router: Router){}
//   username: string;
//   password: string;

//   login() : void {

//     if(this.username == 'admin' && this.password == 'admin'){
//      this.router.navigate(["Active-Draft-Protocol"]);     
     
//     }else {
//       alert("Invalid credentials");
//       this.password = "";
//       this.username = "";
//     }


// }
constructor(
  private service: LoginService
) { }

ngOnInit() {
}

login() {
  this.service.login();
 this.hidelogin = false;
}
}

export interface LoggedInUserEventArgs {
user: string;
usertype: string;
role: string
}

