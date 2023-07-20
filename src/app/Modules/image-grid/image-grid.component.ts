import { imageGridModule } from './../../Interfaces/content';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-image-grid',
    templateUrl: './image-grid.component.html',
    styleUrls: ['./image-grid.component.css']
})
export class ImageGridComponent {
    @Input() module: imageGridModule = {
		type: 'imageGrid',
        backgroundColour: '',
		images: []
	}
}
