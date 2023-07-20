import { Component } from '@angular/core';
import { colours, colourTemplate } from '../../Interfaces/colours';
import { fonts, fontsTemplate } from '../../Interfaces/fonts';
import { email, site, socialUrls } from '../../Interfaces/global';
import { Router } from '@angular/router';
import { socialUrlsTemplate } from '../../Interfaces/socialUrls';
import { WindowWidthService } from '../window-width.service';
import { pageTemplate } from 'src/app/Interfaces/pageTemplate';

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

	site: Array<pageTemplate> = site

	constructor(private router: Router, public windowService: WindowWidthService) {}


    navigate(route: string) {
		if(route.slice(0, 4) == 'http'){
  			window.open(route, '_blank');
		}else{
			this.router.navigate(['/' + route]); 
		}
	}
}
