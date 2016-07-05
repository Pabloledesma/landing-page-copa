import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Fare } from './fare';
import { Origin } from './origin';

@Component({
	selector: 'fares-component',
	template: `
	<table class="table">
		<tr>
			<th>Destino</th>
			<th>Tarifa</th>
		</tr>
		<tr 
			[ngModel]="origin.id"
			*ngFor="let fare of fares | filter: origin.id"
		>
			<td>{{fare.destiny}}</td>
			<td>{{fare.fare}}</td>
		</tr>
	</table>
	`
})

export class FaresComponent {
	
	fares: Fare[];
	
	@Input()
	origin: Origin;


	constructor(private dataService: DataService){}

	getFares(){
		this.dataService.getFares().then( fares => this.fares = fares );
	}

	ngOnInit(){
		this.getFares();
	}
}