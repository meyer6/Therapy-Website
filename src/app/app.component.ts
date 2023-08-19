import { Component } from '@angular/core';
import { site } from './websiteData/pages';
import { Location } from "@angular/common";
import { fontsTemplate } from './Interfaces/fonts';
import { colourTemplate } from './Interfaces/colours';
import { pageTemplate } from './Interfaces/pageTemplate';
import { fonts } from './websiteData/fonts';
import { colours } from './websiteData/colours';

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