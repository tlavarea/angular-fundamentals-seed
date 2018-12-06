import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

	@Output()
	update: EventEmitter<Passenger> = new EventEmitter<Passenger>();

	constructor() { }

	ngOnInit(): void { }

	handleSubmit(passenger: Passenger, isValid: boolean) {
		if (isValid) {
			this.update.emit(passenger);
		}
	}

	toggleCheckIn(checkedIn: boolean) {
		if (checkedIn) {
			this.detail.checkInDate = Date.now();
		}
	}

}
