import { Component } from '@angular/core';
import { fonts, fontsTemplate } from 'src/app/Interfaces/fonts';
import { colours, colourTemplate } from 'src/app/Interfaces/colours';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent {
    fonts: fontsTemplate = fonts;
	colours: colourTemplate = colours;
}
