import { Component, Input } from '@angular/core';
import { landingModuleTemplate } from 'src/app/Interfaces/content';
import { WindowWidthService } from '../window-width.service';

@Component({
    selector: 'app-landing-module',
    templateUrl: './landing-module.component.html',
    styleUrls: ['./landing-module.component.css']
})
export class LandingModuleComponent {
	@Input() module: landingModuleTemplate = {
		type: 'landingModule',
		backgroundImg: '',
		text: []
	};

	constructor(public windowService: WindowWidthService) {}
}
