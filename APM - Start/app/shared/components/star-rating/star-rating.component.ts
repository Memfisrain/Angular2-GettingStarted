import {Component, OnChanges, Input, Output, EventEmitter} from '@angular/core';

@Component({
	selector: 'pm-star-rating',
	moduleId: module.id,
	templateUrl: 'star-rating.component.html',
	styleUrls: ['star-rating.component.css']
})
export class StarRatingComponent implements OnChanges {
	private STAR_WIDTH: number = Math.floor(86/5);
	public starsWidth: number;

	@Input() rating: number;
	@Output() notify: EventEmitter<string> = new EventEmitter<string>();

	ngOnChanges(): void {
		this.starsWidth = this.rating * this.STAR_WIDTH;
	}

	onClick(): void {
		this.notify.emit(`clicked ${this.rating} rating`);
	}
}