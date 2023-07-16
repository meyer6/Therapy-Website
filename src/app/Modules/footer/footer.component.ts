import { Component } from '@angular/core';
import { colourTemplate } from '../../Interfaces/colours';
import { fontsTemplate } from '../../Interfaces/fonts';
import { colours, email, fonts, socialUrls } from '../../Interfaces/global';
import { Router } from '@angular/router';
import { socialUrlsTemplate } from '../../Interfaces/socialUrls';
import { WindowWidthService } from '../window-width.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent {
    colours: colourTemplate = colours;
	fonts: fontsTemplate = fonts;
	email: string = email
	socialUrls: socialUrlsTemplate = socialUrls;

	constructor(private router: Router, public windowService: WindowWidthService) {}


    navigate(route: string) {
		if(route.slice(0, 4) == 'http'){
  			window.open(route, '_blank');
		}else{
			this.router.navigate(['/' + route]); 
		}
	}
}
