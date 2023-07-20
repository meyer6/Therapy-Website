import { Component, Input } from '@angular/core';
import { buttonTemplate, textTemplate, contactPage } from '../../Interfaces/contentTemplates';
import { Router } from '@angular/router';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.css']
})
export class ContentComponent {
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
 