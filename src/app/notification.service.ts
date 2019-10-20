import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {throwError, Observable, of} from 'rxjs';
import { INotificationType } from './inotification-type';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private _http:HttpClient) { }

  getNotificationTypes ( ):Observable<INotificationType[]>{
    
    const url=`${environment.baseUrl}${environment.notificationTypesUrl}`;
    return this._http.get<INotificationType[]>(url);
    
  }
}
