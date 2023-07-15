import { Component, Input } from '@angular/core';
import { module12Template } from 'src/app/Interfaces/content';

@Component({
    selector: 'app-module2b',
    templateUrl: './module2b.component.html',
    styleUrls: ['../styles/module2.css', './module2b.component.css']
})
export class Module2bComponent {
	@Input() module: module12Template = {
		type: 'module2a',
		backgroundColour: '',
		imgURL: '',
		text: []
	};
}
