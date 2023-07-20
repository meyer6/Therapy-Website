import { Component, Input } from '@angular/core';
import { WindowWidthService } from '../window-width.service';
import { landingModule } from 'src/app/Interfaces/moduleTemplates';

@Component({
    selector: 'app-landing-module',
    templateUrl: './landing-module.component.html',
    styleUrls: ['./landing-module.component.css']
})
export class LandingModuleComponent {
	@Input() module: landingModule = {
		type: 'landingModule',
		backgroundImg: '',
		content: []
	};

	constructor(public windowService: WindowWidthService) {}
}
