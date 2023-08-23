import { Component } from '@angular/core';
import { colourTemplate } from '../../Interfaces/colours';
import {  fontsTemplate } from '../../Interfaces/fonts';
import { Router } from '@angular/router';
import { socialUrlsTemplate } from '../../Interfaces/socialUrls';
import { WindowWidthService } from '../window-width.service';
import { pageTemplate } from 'src/app/Interfaces/pageTemplate';
import { colours } from 'src/app/websiteData/colours';
import { fonts } from 'src/app/websiteData/fonts';
import { email, socialUrls } from 'src/app/websiteData/other';
import { site } from 'src/app/websiteData/pages';

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

	
	// Navigates to the desired url
	navigate(route: string){
		
		// Determines if link goes to different website or our one
		if(route.slice(0, 4) == 'http'){
  			window.open(route, '_blank');
		}else{
			this.router.navigate(['/' + route]); 
		}
	}
}
