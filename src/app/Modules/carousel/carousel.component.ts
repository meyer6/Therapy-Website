import { Component, Input } from '@angular/core';
import { colourTemplate } from 'src/app/Interfaces/colours';
import { carouselModule } from 'src/app/Interfaces/moduleTemplates';
import { colours } from 'src/app/websiteData/colours';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
	colours: colourTemplate = colours;

	currentPosition: number = 0;

    @Input() module: carouselModule = {
    	type: 'carousel',
        backgroundColour: '',
    	modules: []
	}
}
