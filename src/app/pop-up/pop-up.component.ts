import { Component } from '@angular/core';
import { colourTemplate, colours } from '../Interfaces/colours';
import { fonts, fontsTemplate } from '../Interfaces/fonts';
import { buttonTemplate, textTemplate } from '../Interfaces/content';
import { heading2, normalText } from '../Interfaces/textDefaults';

@Component({
    selector: 'app-pop-up',
    templateUrl: './pop-up.component.html',
    styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent {
    colours: colourTemplate = colours;
	fonts: fontsTemplate = fonts;

	content: Array<textTemplate | buttonTemplate> = [
		{...heading2, ...{fontSize: 30, content: 'Newsletter'}},
		{...normalText, ...{content: 'Diploma with the Animas Centre for Coaching. In April 2022 I went full time with my Coaching and Hypnotherapy business and it’s hard to describe how proud and fuleive, every testimonial I read, my heart is so full with happiness'}},
	]

	open: boolean = false;
	currentScrollPosition: number = 0;
	totalScroll: number = 0;

	ngOnInit(){
		let calculateScroll = () => {
			this.totalScroll += Math.abs(this.currentScrollPosition - window.scrollY)
			this.currentScrollPosition = window.scrollY

			if(this.totalScroll > 10000){
				this.open = true;
				window.removeEventListener("scroll", calculateScroll)
			}
		}
		let listener = window.addEventListener("scroll", calculateScroll)
		
	}
}
