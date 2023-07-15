import { Component, Input } from '@angular/core';
import { module12Template } from 'src/app/Interfaces/content';

@Component({
    selector: 'app-module1a',
    templateUrl: './module1a.component.html',
    styleUrls: ['./module1a.component.css', '../styles/module1.css']
})
export class Module1aComponent {
	@Input() module: module12Template = {
		type: 'module1a',
		backgroundColour: '',
		imgURL: '',
		text: []
	};
}
 