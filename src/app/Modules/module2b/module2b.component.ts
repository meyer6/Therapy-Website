import { Component, Input } from '@angular/core';
import { imageAndTextModule } from 'src/app/Interfaces/content';
import { WindowWidthService } from '../window-width.service';

@Component({
    selector: 'app-module2b',
    templateUrl: './module2b.component.html',
    styleUrls: ['../styles/module2.css', './module2b.component.css']
})
export class Module2bComponent {
	@Input() module: imageAndTextModule = {
		type: 'module2a',
		backgroundColour: '',
		imgURL: '',
		text: []
	};

	constructor(public windowService: WindowWidthService) {}
}
