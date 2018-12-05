import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';
import { PassengerDashboardService } from '../../passenger-dashboard.service';


@Component({
	selector: 'passenger-dashboard',
	styleUrls: [ './passenger-dashboard.component.scss' ],
	templateUrl: './passenger-dashboard.component.html'
})
export class PassengerDashboardComponent implements OnInit {

	passengers: Passenger[];

	constructor(private passengerService: PassengerDashboardService) { }

	ngOnInit(): void {
		this.passengerService
				.getPassengers()
				.subscribe((data: Passenger[]) => this.passengers = data);
	}

	handleEdit(event: Passenger): void {
		this.passengerService
				.updatePassenger(event)
				// .then((data: Passenger) => {
				.subscribe((data: Passenger) => {
					this.passengers = this.passengers
							.map((passenger: Passenger) => {
								if (passenger.id === event.id) {
									return Object.assign({}, passenger, event);
								}
								return passenger;
							});
				});
	}

	handleRemove(event: Passenger): void {
		this.passengerService
				.removePassenger(event)
				.subscribe((data: Passenger) => {
					this.passengers = this.passengers.filter((passenger: Passenger) => passenger.id !== event.id);
				});
	}

}
