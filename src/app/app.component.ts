import { Component } from '@angular/core';

import { ApiService } from './shared';
//import { MyMonitoringService } from './log/monitoring.service';
import '../style/app.scss';

@Component({
  selector: 'my-app', // <my-app></my-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  title: string;
  name: string;
  url: string;
  properties: any; 
  measurements: any; 
  duration: number;
//private myMonitoringService: MyMonitoringService
  constructor(private api: ApiService ) {
    this.title = this.api.title;

    //this.myMonitoringService.logPageView(this.name,this.url,this.properties,this.measurements,this.duration);
  }
}
