import { Component, Input } from '@angular/core';
import { module3Template } from 'src/app/Interfaces/content';
import { WindowWidthService } from '../window-width.service';

@Component({
    selector: 'app-module3',
    templateUrl: './module3.component.html',
    styleUrls: ['./module3.component.css']
})
export class Module3Component {
	@Input() module: module3Template = {
		type: 'module3a',
		backgroundColour: '',
		text1: [],
		text2: [],
		text3: [],
	};

	constructor(public windowService: WindowWidthService) {}
}
