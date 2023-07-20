import { Component, Input } from '@angular/core';
import { WindowWidthService } from '../window-width.service';
import { textModule } from 'src/app/Interfaces/moduleTemplates';

@Component({
    selector: 'app-text-module',
    templateUrl: './text-module.component.html',
    styleUrls: ['./text-module.component.css']
})
export class TextModuleComponent {
	@Input() module: textModule = {
		type: 'module3a',
		backgroundColour: '',
		content1: [],
		content2: [],
		content3: [],
	};

	constructor(public windowService: WindowWidthService) {}
}
