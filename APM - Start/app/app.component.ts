import {Component} from '@angular/core';
import {ProductService} from './features/product-list/services/product.service';

@Component({
	selector: 'pm-app',
	template: `
		<div><h1>{{pageTitle}}</h1>
			<pm-products></pm-products>
		</div>
	`,
	providers: [ProductService]
})
export class AppComponent {
	pageTitle: string = 'My Dear Friends';
}