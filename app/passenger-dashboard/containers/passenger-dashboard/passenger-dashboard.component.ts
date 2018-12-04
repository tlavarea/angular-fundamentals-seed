import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
	selector: 'passenger-dashboard',
	styleUrls: [ './passenger-dashboard.component.scss' ],
	templateUrl: './passenger-dashboard.component.html'
})
export class PassengerDashboardComponent implements OnInit {

	passengers: Passenger[];

	constructor() { }

	ngOnInit(): void { 
		console.log('ngOnInit');
		this.passengers = [
			{
				id: 1,
				fullname: 'Stephen',
				checkedIn: true,
				checkInDate: 1542753040477,
				children: null
			},
			{
				id: 2,
				fullname: 'Rose',
				checkedIn: false,
				checkInDate: null,
				children: [
					{ name:'Ted', age:12 },
					{ name:'Chloe', age:11 }
				]
			},
			{
				id: 3,
				fullname: 'James',
				checkedIn: true,
				checkInDate: 1542753040487,
				children: null
			},
			{
				id: 4,
				fullname: 'Louise',
				checkedIn: true,
				checkInDate: 1542753040500,
				children: [
					{ name:'Jessica', age:1 }
				]
			},
			{
				id: 5,
				fullname: 'Tina',
				checkedIn: false,
				checkInDate: null,
				children: null
			}
		];
	}

	handleEdit(event: Passenger): void {
		this.passengers = this.passengers
				.map((passenger: Passenger) => {
					if (passenger.id === event.id) {
						return Object.assign({}, passenger, event);
					}
					return passenger;
				});
	}

	handleRemove(event: Passenger): void {
		console.log(event);
		this.passengers = this.passengers.filter((passenger: Passenger) => passenger.id !== event.id);
	}

}
