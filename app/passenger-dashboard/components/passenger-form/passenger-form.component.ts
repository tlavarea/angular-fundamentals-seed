import { Component, Input, OnInit } from '@angular/core';

import { Baggage } from '../../models/baggage.interface';
import { Passenger } from '../../models/passenger.interface';


@Component({
	selector: 'passenger-form',
	templateUrl: './passenger-form.component.html',
	styleUrls: ['./passenger-form.component.scss']
})
export class PassengerFormComponent implements OnInit {

	baggage: Baggage[] = [
		{
			key: 'none',
			value: 'None'
		},
		{
			key: 'hand-only',
			value: 'Hand'
		},
		{
			key: 'hold-only',
			value: 'Hold'
		},
		{
			key: 'hand-hold',
			value: 'Hand and Hold'
		}
	];

	@Input()
	detail: Passenger;

	constructor() { }

	ngOnInit(): void { }

	toggleCheckIn(checkedIn: boolean) {
		if (checkedIn) {
			this.detail.checkInDate = Date.now();
		}
	}

}
