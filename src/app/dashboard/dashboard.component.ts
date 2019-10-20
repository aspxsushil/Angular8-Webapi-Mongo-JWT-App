import { Component, OnInit } from '@angular/core';
import {NotificationService} from '../notification.service';
import {INotificationType} from '../inotification-type';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  notificationTypes: INotificationType[];

  constructor(private notificationService:NotificationService) { }

  ngOnInit() {
    this.getNotificationTypes();
  }

  getNotificationTypes():void{
    this.notificationService.getNotificationTypes().subscribe(types=>{this.notificationTypes=types;
    console.log(this.notificationTypes);
    });
  }

}
