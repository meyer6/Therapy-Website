import { Component, Input } from '@angular/core';
import { buttonTemplate, textTemplate, contactPage } from '../Interfaces/content';
import { Router } from '@angular/router';

@Component({
    selector: 'app-text-item',
    templateUrl: './text-item.component.html',
    styleUrls: ['./text-item.component.css']
})
export class TextItemComponent {
	// @Input() item: textTemplate = {
	// 	type: 'text',
	// 	content: 'Not Loading',
	// 	fontFamily: '',
	// 	fontColour: '',
	// 	fontSize: 16,
	// 	fontWeight: 'normal',
	// 	lineHeight: 27
	// };

	// @Input() lastItem: boolean = false;

	@Input() text: Array<textTemplate | buttonTemplate | contactPage> = [];
	hover: boolean = false;

	constructor(private router: Router) {}

	navigate(route: string) {
		if(route.slice(0, 4) == 'http'){
  			window.open(route, '_blank');
		}else{
			this.router.navigate(['/' + route]); 
		}
	}
}
 