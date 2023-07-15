import { Component, Input } from '@angular/core';
import { fontsTemplate } from 'src/app/Interfaces/fonts';
import { fonts } from 'src/app/Interfaces/global';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css']
})
export class ButtonComponent {
	@Input() content: string | null = null;
	@Input() colour: string = '#000000';

	fonts: fontsTemplate = fonts;
	hover: boolean = false;
}
