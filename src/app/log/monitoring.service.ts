import { Injectable } from '@angular/core'; 
import { AppInsights } from 'applicationinsights-js'; 

@Injectable() 
export class MyMonitoringService { 

	private config: Microsoft.ApplicationInsights.IConfig = { 
		instrumentationKey: 'a753d763-e4d0-4a86-a445-124947e45600' //Azure app insight instrumentation key
	}; 

	constructor() { 
		if (!AppInsights.config) { 
			AppInsights.downloadAndSetup(this.config); 
		} 
	} 

	logPageView(name?: string, url?: string, properties?: any, 
			measurements?: any, duration?: number) { 
	AppInsights.trackPageView(name, url, properties, measurements, duration); 
	} 

	logEvent(name: string, properties?: any, measurements?: any) { 
		AppInsights.trackEvent(name, properties, measurements); 
    } 
}