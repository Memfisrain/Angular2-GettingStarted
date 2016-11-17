import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {WelcomeComponent} from './home/welcome.component';
import ProductListComponent from './features/product-list/product-list.component';
import ProductDetailComponent from './features/product-detail/product-detail.component';
import {ProductFilterPipe} from './features/product-list/pipes/product-filter.pipe';
import {StarRatingComponent} from './shared/components/star-rating/star-rating.component';

@NgModule({
  imports: [ 
  	BrowserModule, 
  	FormsModule, 
  	HttpModule, 
  	RouterModule.forRoot([
  		{path: 'products', component: ProductListComponent},
  		{path: 'product/:id', component: ProductDetailComponent},
  		{path: 'welcome', component: WelcomeComponent},
  		{path: '', redirectTo: 'welcome', pathMatch: 'full'},
  		{path: '**', redirectTo: 'welcome', pathMatch: 'full'},
  	]) 
  ],
  declarations: [ 
  	AppComponent,
  	WelcomeComponent,
  	ProductDetailComponent,
   	ProductListComponent,
    ProductFilterPipe,
    StarRatingComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
