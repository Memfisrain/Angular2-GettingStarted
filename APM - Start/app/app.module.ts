import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent }  from './app.component';
import ProductListComponent  from './features/product-list/product-list.component';
import {ProductFilterPipe} from './features/product-list/pipes/product-filter.pipe';
import {StarRatingComponent} from './shared/components/star-rating/star-rating.component';

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ 
  	AppComponent,
   	ProductListComponent,
    ProductFilterPipe,
    StarRatingComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
