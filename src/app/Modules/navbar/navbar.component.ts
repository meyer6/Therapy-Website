import { Component, Input } from '@angular/core';
import { Location } from "@angular/common";
import { colourTemplate } from '../../Interfaces/colours';
import { fontsTemplate } from '../../Interfaces/fonts';
import { Router } from '@angular/router';
import { socialUrlsTemplate } from '../../Interfaces/socialUrls';
import { pageTemplate } from 'src/app/Interfaces/pageTemplate';
import { colours } from 'src/app/websiteData/colours';
import { fonts } from 'src/app/websiteData/fonts';
import { logoUrl, socialUrls } from 'src/app/websiteData/other';
import { site } from 'src/app/websiteData/pages';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
	logoUrl: string = logoUrl;
	colours: colourTemplate = colours;
	fonts: fontsTemplate = fonts;
	socialUrls: socialUrlsTemplate = socialUrls;

	navBarPosition: number = 0
	currentScrollPosition: number = 0
	totalUpScroll: number = 0

	open: boolean = false;

	site: Array<pageTemplate> = site

	windowHeight: number = window.innerHeight
	@Input() landingModule: boolean = false

	constructor(private router: Router, public location: Location) {}

	ngOnInit(){
		// Moves page to top
		window.scrollTo(0, 0);

		// Logic for when navbar opens
		window.addEventListener("scroll", () => {
			const scrollDiff = this.currentScrollPosition - window.scrollY

			// If user is at top of page the navbar will appear gradually
			if(window.scrollY < 30 && this.navBarPosition == -30 || window.scrollY < 200 && this.navBarPosition != -30 ){
				this.totalUpScroll = 0;
				this.navBarPosition =  - window.scrollY

			// If user scrolls down navbar is retracted
			}else if(scrollDiff < 0){
				this.totalUpScroll = 0
				this.navBarPosition = Math.max(-200, this.navBarPosition + scrollDiff)

			// If he user has scrolled 250px upwards continuously the navbar will appear
			}else{
				this.totalUpScroll += scrollDiff
				if(this.totalUpScroll >= 250){
					this.navBarPosition = -30
				}
			}
			this.currentScrollPosition = window.scrollY
		})
	}

	min(a: number, b: number){
		return Math.min(a, b)
	}

	// Navigates to the desired url
	navigate(route: string) {
		if(route.slice(0, 4) == 'http'){
  			window.open(route, '_blank');
		}else{
			this.open = false;
			this.router.navigate(['/' + route]); 
		}
	}
}
