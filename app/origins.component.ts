import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Origin } from './origin';
import { DataService } from './data.service';
import { FaresComponent } from './fares.component';

@Component({
	selector: 'origin-component',
	template: `
	<div class="col-md-2">
		<nav>
			<h3>{{title}}</h3>
			<ul class="nav nav-pills nav-stacked">
				<li 
					*ngFor="let origin of origins"
					(click)="onSelect(origin)"
					[class.active]="origin === selectedOrigin"
				>
					<a>{{origin.name}}</a>
				</li>
			</ul>
		</nav>
	</div>
	<div class="col-md-6">
		<fares-component [origin]="selectedOrigin"></fares-component>
	</div>
	`,
	directives: [FaresComponent]


})

export class OriginsComponent {
	title = 'Origenes';
	origins: Origin[];
	selectedOrigin: Origin;

	constructor(private dataService: DataService){}

	getOrigins(){
		this.dataService.getOrigins().then( origins => this.origins = origins );
	}

	onSelect(origin: Origin){
		this.selectedOrigin = origin;
		console.log(origin);
	}

	ngOnInit(){
		this.getOrigins();
	}
}