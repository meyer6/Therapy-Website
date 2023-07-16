import { Component, Input } from '@angular/core';
import { module12Template } from 'src/app/Interfaces/content';
import { WindowWidthService } from '../window-width.service';

@Component({
    selector: 'app-module1b',
    templateUrl: './module1b.component.html',
    styleUrls: ['./module1b.component.css', '../styles/module1.css']
})
export class Module1bComponent {
	@Input() module: module12Template = {
		type: 'module1a',
		backgroundColour: '',
		imgURL: '',
		text: []
	};
	constructor(public windowService: WindowWidthService) {}
}
