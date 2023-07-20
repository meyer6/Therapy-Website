import { Component, Input } from '@angular/core';
import { buttonTemplate, textTemplate, contactPage } from '../Interfaces/content';
import { Router } from '@angular/router';

@Component({
    selector: 'app-text-item',
    templateUrl: './text-item.component.html',
    styleUrls: ['./text-item.component.css']
})
export class TextItemComponent {
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
 