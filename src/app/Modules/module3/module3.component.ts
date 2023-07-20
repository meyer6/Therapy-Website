import { Component, Input } from '@angular/core';
import { WindowWidthService } from '../window-width.service';
import { textModule } from 'src/app/Interfaces/moduleTemplates';

@Component({
    selector: 'app-module3',
    templateUrl: './module3.component.html',
    styleUrls: ['./module3.component.css']
})
export class Module3Component {
	@Input() module: textModule = {
		type: 'module3a',
		backgroundColour: '',
		text1: [],
		text2: [],
		text3: [],
	};

	constructor(public windowService: WindowWidthService) {}
}
