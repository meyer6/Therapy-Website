import { Component } from '@angular/core';
import { fontsTemplate } from 'src/app/Interfaces/fonts';
import { colourTemplate } from 'src/app/Interfaces/colours';
import { fonts, colours } from 'src/app/Interfaces/global';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent {
    fonts: fontsTemplate = fonts;
	colours: colourTemplate = colours;
}
