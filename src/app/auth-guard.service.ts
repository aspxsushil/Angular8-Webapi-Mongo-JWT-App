import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
 

  constructor(private jwtHelper:JwtHelperService,private router:Router) { }

  canActivate(){
    var token = localStorage.getItem("jwt");

    if(token && !this.jwtHelper.isTokenExpired(token)){
      return true;
    }

    //did not validate so navigate to login page
    this.router.navigate(["/login"])
    return false;
  }
}
