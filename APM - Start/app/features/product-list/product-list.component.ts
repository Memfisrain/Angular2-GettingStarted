import {Component, OnInit} from '@angular/core';
import {IProduct} from './interfaces/product.interface';
import {ProductService} from './services/product.service';

@Component({
  moduleId: module.id,
	templateUrl: 'product-list.component.html',
	styleUrls: ['product-list.component.css']
})
export default class ProductListComponent implements OnInit {
	pageTitle: string = 'Product List';
	imageWidth: number = 50;
	imageMargin: number = 2;
	isImageShowing: boolean = false;
	listFilter: string;
  errorMessage: string;
  products: IProduct[];
	
  constructor(private _productService: ProductService) {}

  toggleImage(): void {
  	this.isImageShowing = !this.isImageShowing;
  }

  ngOnInit(): void {
  	this._productService.getProducts()
      .subscribe(products => this.products = products,
                 error => this.errorMessage = <any>error);
  }

  onNotify(msg: string): void {
    this.pageTitle = msg;
  }
}