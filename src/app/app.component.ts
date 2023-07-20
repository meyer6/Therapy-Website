import { Component } from '@angular/core';
import { site } from './Interfaces/global';
import { Location } from "@angular/common";
import { fonts, fontsTemplate } from './Interfaces/fonts';
import { colourTemplate, colours } from './Interfaces/colours';
import { pageTemplate } from './Interfaces/pageTemplate';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'TherapyWebsite';
    site: Array<pageTemplate> = site
    numOfModules: number = 9;

    fonts: fontsTemplate = fonts;
    colours: colourTemplate = colours

    constructor(public location: Location) {}
}