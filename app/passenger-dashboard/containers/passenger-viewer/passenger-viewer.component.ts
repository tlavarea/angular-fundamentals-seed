import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params  } from '@angular/router';

import { switchMap } from 'rxjs/operators';

import { PassengerDashboardService } from '../../passenger-dashboard.service';
import { Passenger } from '../../models/passenger.interface';


@Component({
	selector: 'passenger-viewer',
	templateUrl: './passenger-viewer.component.html',
	styleUrls: ['./passenger-viewer.component.scss']
})
export class PassengerViewerComponent implements OnInit {

	passenger: Passenger;

	constructor(private passengerService: PassengerDashboardService,
		private router: Router,
		private route: ActivatedRoute) { }

	ngOnInit(): void {
		this.route.params
		 		.pipe(switchMap((data: Passenger) => this.passengerService.getPassenger(data.id)))
				.subscribe((passenger: Passenger) => this.passenger = passenger);
	}

	goBack(): void {
		this.router.navigate(['/passengers']);
	}

	onUpdatePassenger(passenger: Passenger) {
		this.passengerService
				.updatePassenger(passenger)
				.subscribe((data: Passenger) => this.passenger = Object.assign({}, this.passenger, data));
	}

}
