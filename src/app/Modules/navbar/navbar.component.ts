import { Component } from '@angular/core';
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

	position: number = 0
	currentScrollPosition: number = 0
	totalUpScroll: number = 0

	open: boolean = false;

	site: Array<pageTemplate> = site

	constructor(private router: Router, public location: Location) {}

	ngOnInit(){
		window.addEventListener("scroll", () => {
			const scrollDiff = this.currentScrollPosition - window.scrollY

			if(window.scrollY < 30 && this.position == -30 || window.scrollY < 200 && this.position != -30 ){
				this.totalUpScroll = 0;
				this.position =  - window.scrollY

			}else if(scrollDiff < 0){
				this.totalUpScroll = 0
				this.position = Math.max(-200, this.position + scrollDiff)

			}else{
				this.totalUpScroll += scrollDiff
				if(this.totalUpScroll >= 250){
					this.position = -30
				}
			}
			this.currentScrollPosition = window.scrollY
		})
	}

	min(a: number, b: number){
		return Math.min(a, b)
	}

	navigate(route: string) {
		if(route.slice(0, 4) == 'http'){
  			window.open(route, '_blank');
		}else{
			this.open = false;
			this.router.navigate(['/' + route]); 
		}
	}
}
