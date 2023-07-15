import { Component, Input } from '@angular/core';
import { module12Template } from 'src/app/Interfaces/content';

@Component({
    selector: 'app-module2a',
    templateUrl: './module2a.component.html',
    styleUrls: ['../styles/module2.css', './module2a.component.css']
})
export class Module2aComponent {
	@Input() module: module12Template = {
		type: 'module2a',
		backgroundColour: '',
		imgURL: '',
		text: []
	};
}
