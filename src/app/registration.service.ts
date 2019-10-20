import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {throwError, Observable, of} from 'rxjs';
import {JwtHelperService} from '@auth0/angular-jwt';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  readonly _url= `${environment.baseUrl}${environment.registerUrl}`;//'https://localhost:44316/api/auth/register';
  constructor(private _http:HttpClient,private jwtHelper:JwtHelperService) { }

  
  register(userData){
    
    return this._http.post<any>(this._url,userData).pipe(catchError(this.handleError<any>('register')))
  }
 
  GetLoggedInToken(){
    const token=localStorage.getItem("jwt");    
    if( token && !this.jwtHelper.isTokenExpired(token)){
      return token;
    }
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.log(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
