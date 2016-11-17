import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {IProduct} from '../product-list/interfaces/product.interface';

@Component({
	templateUrl: 'app/features/product-detail/product-detail.component.html'
})
export default class ProductDetailComponent implements OnInit {
	pageTitle: string = 'Product Detail';
	product: IProduct;
	defaultUrl = '/products';

	constructor(private _route: ActivatedRoute,
							private _router: Router) {}

	ngOnInit(): void {
		let id = +this._route.snapshot.params.id;
		console.log(this._route);
		this.pageTitle = `Product #${id}`;
	}

	onBack(): void {
		console.log(this.defaultUrl);
		this._router.navigate([this.defaultUrl]);
	}
}