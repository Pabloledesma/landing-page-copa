import { Injectable } from '@angular/core';
import { FARES, ORIGINS } from './data';

@Injectable()
export class DataService {
	getOrigins(){
		return Promise.resolve(ORIGINS);
	}

	getFares(){
		return Promise.resolve(FARES);
	}
}