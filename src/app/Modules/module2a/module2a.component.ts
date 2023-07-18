import { Component, Input } from '@angular/core';
import { imageAndTextModule } from 'src/app/Interfaces/content';
import { WindowWidthService } from '../window-width.service';

@Component({
    selector: 'app-module2a',
    templateUrl: './module2a.component.html',
    styleUrls: ['../styles/module2.css', './module2a.component.css']
})
export class Module2aComponent {
	@Input() module: imageAndTextModule = {
		type: 'module2a',
		backgroundColour: '',
		imgURL: '',
		text: []
	};

	constructor(public windowService: WindowWidthService) {}
}
