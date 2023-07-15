import { Component } from '@angular/core';
import { pageTemplate } from './Interfaces/content';
import { site } from './Interfaces/global';
import { Location } from "@angular/common";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'TherapyWebsite';
    site: Array<pageTemplate> = site

    constructor(public location: Location) {}
}