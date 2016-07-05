import { Fare } from './fare';
import { Origin } from './origin';

export var FARES: Fare[] = [
	{origin_id: 1, destiny: 'San Andres', fare: 1120},
	{origin_id: 1, destiny: 'Aruba', fare: 965},
	{origin_id: 1, destiny: 'Cancun', fare: 859},
	{origin_id: 1, destiny: 'La Habana', fare: 1356},
	{origin_id: 1, destiny: 'Montego Bay', fare: 1120},
	{origin_id: 1, destiny: 'Panamá', fare: 1560},
	{origin_id: 1, destiny: 'Punta Cana', fare: 1470},

	{origin_id: 2, destiny: 'San Andres', fare: 850},
	{origin_id: 2, destiny: 'Aruba', fare: 560},
	{origin_id: 2, destiny: 'Cancun', fare: 654},
	{origin_id: 2, destiny: 'La Habana', fare: 321},
	{origin_id: 2, destiny: 'Montego Bay', fare: 789},
	{origin_id: 2, destiny: 'Panamá', fare: 787},
	{origin_id: 2, destiny: 'Punta Cana', fare: 954},

	{origin_id: 3, destiny: 'San Andres', fare: 741},
	{origin_id: 3, destiny: 'Aruba', fare: 852},
	{origin_id: 3, destiny: 'Cancun', fare: 963},
	{origin_id: 3, destiny: 'La Habana', fare: 745},
	{origin_id: 3, destiny: 'Montego Bay', fare: 957},
	{origin_id: 3, destiny: 'Panamá', fare: 1025},
	{origin_id: 3, destiny: 'Punta Cana', fare: 1065}
];


export var ORIGINS: Origin[] = [
	{id: 1, name: 'Barranquilla'},
	{id: 2, name: 'Bucaramanga'},
	{id: 3, name: 'Bogotá'},
	{id: 4, name: 'Cali'},
	{id: 5, name: 'Cucuta'},
	{id: 6, name: 'Medellín'},
	{id: 7, name: 'Panamá'}

];