import { Component, Input } from '@angular/core';
import { module3Template } from 'src/app/Interfaces/content';

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
	
	width: number = window.innerWidth

	ngOnInit(){
		window.addEventListener('resize', () => {
			this.width = window.innerWidth
		})
	}
}
