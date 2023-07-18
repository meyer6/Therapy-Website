import { Component, Input } from '@angular/core';
import { imageAndTextModule } from 'src/app/Interfaces/content';
import { WindowWidthService } from '../window-width.service';

@Component({
    selector: 'app-module1a',
    templateUrl: './module1a.component.html',
    styleUrls: ['./module1a.component.css', '../styles/module1.css']
})
export class Module1aComponent {
	@Input() module: imageAndTextModule = {
		type: 'module1a',
		backgroundColour: '',
		imgURL: '',
		text: []
	};

	constructor(public windowService: WindowWidthService) {}
}
 