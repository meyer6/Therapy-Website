import { Component, Input } from '@angular/core';
import { buttonTemplate, textTemplate, contactPage, imageTemplate } from '../../Interfaces/contentTemplates';
import { Router } from '@angular/router';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.css']
})
export class ContentComponent {
	@Input() content: Array<textTemplate | buttonTemplate | imageTemplate | contactPage> = [];
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
 