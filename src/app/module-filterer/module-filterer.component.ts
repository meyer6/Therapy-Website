import { Component, Input } from '@angular/core';
import { carouselModule, imageAndTextModule, imagesModule, landingModule, textModule } from "../Interfaces/moduleTemplates";

@Component({
    selector: 'app-module-filterer',
    templateUrl: './module-filterer.component.html',
    styleUrls: ['./module-filterer.component.css']
})
export class ModuleFiltererComponent {
    @Input() module: imageAndTextModule | textModule | imagesModule | landingModule | carouselModule = {
        type: 'carousel',
            backgroundColour: '',
        modules: []
	}
}
