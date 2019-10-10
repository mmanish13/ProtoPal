import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { LoggedInUserEventArgs } from './login/login.component';
import { LoginService } from './login/login.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // isUserLogged = false;
  // user: LoggedInUserEventArgs;
  // title = 'ProtoPal';
  // onLoginEventFired(eventArgs: LoggedInUserEventArgs) {
  //   console.log("APP COMPONENT: On Login Event Fired", eventArgs);
  //   if(eventArgs.user) {
  //     this.isUserLogged = true;
  //     this.user = eventArgs;
  //   }
  // }
  
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
  private service: LoginService,
  private router: Router
) { }

ngOnInit() {
}

login() {
  this.service.login();
 this.hidelogin = false;
 this.router.navigate(["Active-Draft-Protocol"]);
}
}

export interface LoggedInUserEventArgs {
user: string;
usertype: string;
role: string
}

