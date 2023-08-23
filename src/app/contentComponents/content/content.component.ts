import { Component, Input } from '@angular/core';
import { buttonTemplate, textTemplate, contactPage, imageTemplate, iFrameTemplate } from '../../Interfaces/contentTemplates';
import { Router } from '@angular/router';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.css']
})
export class ContentComponent {
	@Input() content: Array<textTemplate | buttonTemplate | imageTemplate | iFrameTemplate | contactPage> = [];
	hover: boolean = false;

	constructor(private router: Router) {}

	// When button is pressed navigates to the desired url
	navigate(route: string){

		// Determines if link goes to different website or our one
		if(route.slice(0, 4) == 'http'){
  			window.open(route, '_blank');
		}else{
			this.router.navigate(['/' + route]); 
		}
	}
}
 