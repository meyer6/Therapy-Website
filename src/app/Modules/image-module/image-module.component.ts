import { Component, Input } from '@angular/core';
import { module12Template } from 'src/app/Interfaces/content';

@Component({
    selector: 'app-image-module',
    templateUrl: './image-module.component.html',
    styleUrls: ['./image-module.component.css']
})
export class ImageModuleComponent {
	@Input() module: module12Template = {
        type: 'module1a',
        backgroundColour: '',
        imgURL: '',
        text: []
    };
}
