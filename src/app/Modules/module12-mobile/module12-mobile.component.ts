import { Component, Input } from '@angular/core';
import { WindowWidthService } from '../window-width.service';
import { imageAndTextModule } from 'src/app/Interfaces/moduleTemplates';

@Component({
    selector: 'app-module12-mobile',
    templateUrl: './module12-mobile.component.html',
    styleUrls: ['../styles/module2.css']
})
export class Module12MobileComponent {
	@Input() module: imageAndTextModule = {
		type: 'module2a',
		backgroundColour: '',
		imgURL: '',
		text: []
	};

	constructor(public windowService: WindowWidthService) {}
}
