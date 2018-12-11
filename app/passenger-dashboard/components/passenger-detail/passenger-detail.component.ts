import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';


@Component({
	selector: 'passenger-detail',
	templateUrl: './passenger-detail.component.html',
	styleUrls: ['./passenger-detail.component.scss']
})
export class PassengerDetailComponent implements OnChanges, OnInit {

	@Input()
	detail: Passenger;

	@Output()
	edit: EventEmitter<Passenger> = new EventEmitter<Passenger>();

	@Output()
	remove: EventEmitter<Passenger> = new EventEmitter<Passenger>();

	@Output()
	view: EventEmitter<Passenger> = new EventEmitter<Passenger>();

	editing: boolean = false;

	constructor() { }

	ngOnChanges(changes): void {
		if (changes.detail) {
			this.detail = Object.assign({}, changes.detail.currentValue);
		}
		console.log('ngOnChanges');
	}

	ngOnInit(): void { 
		console.log('ngOnInit');
	}

	goToPassenger(): void {
		this.view.emit(this.detail);
	}

	onNameChange(value: string): void {
		this.detail.fullname = value;
	}

	onRemove(): void {
		this.remove.emit(this.detail);
	}

	toggleEdit(): void {
		if (this.editing) {
			this.edit.emit(this.detail);
		}
		this.editing = !this.editing;
	}

}
