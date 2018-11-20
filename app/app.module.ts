import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';

import { AppComponent } from './app.component';


@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		// Angular Modules
		BrowserModule,
		CommonModule,

		// Custom Modules
		PassengerDashboardModule
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule {}
