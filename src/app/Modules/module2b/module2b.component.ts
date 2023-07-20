import { Component, Input } from '@angular/core';
import { WindowWidthService } from '../window-width.service';
import { imageAndTextModule } from 'src/app/Interfaces/moduleTemplates';

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
