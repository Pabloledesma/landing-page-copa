import { Component } from '@angular/core';
import { OriginsComponent } from './origins.component';
import { DataService } from './data.service';

@Component({
	selector: 'app-component',
	templateUrl: 'app/assets/templates/app.component.html',
	styleUrls: ['app/assets/css/app.component.css'],
	directives: [OriginsComponent],
	providers:[DataService]
})

export class AppComponent {

	title = "Viaja a Estados unidos";
	subtitle = "descuentos increibles";
	
}

