import { Component, Input } from '@angular/core';
import { WindowWidthService } from '../window-width.service';
import { imageAndTextModule } from 'src/app/Interfaces/moduleTemplates';

@Component({
    selector: 'app-module1b',
    templateUrl: './module1b.component.html',
    styleUrls: ['./module1b.component.css', '../styles/module1.css']
})
export class Module1bComponent {
	@Input() module: imageAndTextModule = {
		type: 'module1a',
		backgroundColour: '',
		imgURL: '',
		content: []
	};
	constructor(public windowService: WindowWidthService) {}
}
