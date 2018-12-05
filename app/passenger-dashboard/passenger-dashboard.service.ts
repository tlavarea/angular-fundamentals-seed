import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';

import { Passenger } from './models/passenger.interface';


const PASSENGER_API: string = '/api/passengers';

@Injectable()
export class PassengerDashboardService {

	constructor(private http: Http) { }

	getPassengers(): Observable<Passenger[]> {
		return this.http
				.get(PASSENGER_API)
				.pipe(
					map((response: Response) => response.json()),
					catchError((err, caught) => {
						console.error('Error: ', err, 'Caught: ', caught);
						return Observable.throw(err);
					}));
	}

	getPassenger(id: number): Observable<Passenger> {
		return this.http
				.get(`${PASSENGER_API}/${id}`)
				.pipe(
					map((response: Response) => response.json()),
					catchError((err: any, caught: any) => {
						console.error('Error: ', err, 'Caught: ', caught);
						return Observable.throw(err);
					}));
	}

	// Can use promises instead of Observable
	updatePassenger(passenger: Passenger): Observable<Passenger> {  // Promise<Passenger> {
		// just to show how to pass in request options
		// let headers = new Headers({
		// 		'Content-Type': 'application/json'
		// 	});
		// let options = new RequestOptions({
		// 		'headers': headers
		// 	});

		return this.http
				// .put(`${PASSENGER_API}/${passenger.id}`, passenger, options)
				.put(`${PASSENGER_API}/${passenger.id}`, passenger)
				.pipe(
					map((response: Response) => response.json()),
					catchError((err: any, caught: any) => {
						console.error('Error: ', err, 'Caught: ', caught);
						return Observable.throw(err);
					}));
				// .toPromise()
				// .then((response: Response) => response.json());
	}

	removePassenger(passenger: Passenger): Observable<Passenger> {
		return this.http
				.delete(`${PASSENGER_API}/${passenger.id}`)
				.pipe(
					map((response: Response) => response.json()),
					catchError((err, caught) => {
						console.error('Error: ', err, 'Caught: ', caught);
						return Observable.throw(err);
					}));
	}

}