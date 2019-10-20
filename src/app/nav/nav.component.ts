import { Component, OnInit } from '@angular/core';
import {EnvironmentService} from '../environment.service';
import {RegistrationService} from '../registration.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  leftnavitems:any[];
  rightnavitems:any[];
  token:any;
  constructor(private environmentService:EnvironmentService,private registrationService:RegistrationService) { 
    this.token=registrationService.GetLoggedInToken();    
  }

  ngOnInit() {
    this.getnavItems();
  }

  getnavItems():void{
    var navitems=this.environmentService.getNavItems();
      this.leftnavitems=navitems.filter(x=>x.type=='left');
      this.rightnavitems=navitems.filter(x=>x.type=='right');
  }

  Logout(){
    localStorage.setItem("jwt","");
  }

}
