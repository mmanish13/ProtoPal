import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { LoggedInUserEventArgs } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isUserLogged = false;
  user: LoggedInUserEventArgs;
  shownavbar : boolean;
  constructor(private router: Router,private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.$isLoggedIn
      .subscribe( (data) => {        
          this.isUserLogged = true;
          this.user = data;
          if(this.user.user == "codewithsrini")
          {
            this.shownavbar = true;
          }
      })

}

logout()
{
  this.user.user = "dsffdsgf";
  
  this.shownavbar = false;
}
  
}
