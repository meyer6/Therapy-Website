import { Component } from '@angular/core';
import { colourTemplate } from '../../Interfaces/colours';
import { fontsTemplate } from '../../Interfaces/fonts';
import { buttonTemplate, textTemplate } from '../../Interfaces/contentTemplates';
import { fonts } from 'src/app/websiteData/fonts';
import { colours } from 'src/app/websiteData/colours';
import { popupData } from 'src/app/websiteData/other';

@Component({
    selector: 'app-pop-up',
    templateUrl: './pop-up.component.html',
    styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent {
    colours: colourTemplate = colours;
	fonts: fontsTemplate = fonts;

	content: Array<textTemplate | buttonTemplate> = popupData

	open: boolean = false;
	currentScrollPosition: number = 0;
	totalScroll: number = 0;

	ngOnInit(){
		let calculateScroll = () => {
			this.totalScroll += Math.abs(this.currentScrollPosition - window.scrollY)
			this.currentScrollPosition = window.scrollY

			// If user has scrolled more than 10,000px then the popup will appear
			if(this.totalScroll > 10000){
				this.open = true;
				window.removeEventListener("scroll", calculateScroll)
			}
		}
		let listener = window.addEventListener("scroll", calculateScroll)
		
	}

	emailSubmit(event: Event, email: string){
		event.preventDefault()
		this.open = false;
		console.log(email)
	}
}
