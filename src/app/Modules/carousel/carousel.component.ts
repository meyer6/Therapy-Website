import { Component, Input } from '@angular/core';
import { colourTemplate } from 'src/app/Interfaces/colours';
import { carouselModule } from 'src/app/Interfaces/moduleTemplates';
import { colours } from 'src/app/websiteData/colours';
import { WindowWidthService } from '../window-width.service';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
	colours: colourTemplate = colours;

	currentPosition: number = 0;

    startX: number = 0.1
    currentX: number = 0.1

    @Input() module: carouselModule = {
    	type: 'carousel',
        backgroundColour: '',
    	modules: []
	}

	constructor(public windowService: WindowWidthService) {}

    drag(event: MouseEvent | TouchEvent){
        if(event instanceof MouseEvent){
            this.startX = event.clientX
            this.currentX = event.clientX

            const mouseMoveFunction = (event: MouseEvent) => {
                this.currentX = event.clientX
            }
            document.addEventListener('mousemove', mouseMoveFunction)        
        
            document.addEventListener('mouseup', () => {
                releaseFunction()
                document.removeEventListener('mousemove', mouseMoveFunction)
            }, {once: true})
        }else{
            this.startX = event.changedTouches[0].clientX
            this.currentX = event.changedTouches[0].clientX  
            
            const touchMoveFunction = (event: TouchEvent) => {
                this.currentX = event.changedTouches[0].clientX
            }
            document.addEventListener('touchmove', touchMoveFunction)
            
            document.addEventListener('touchend', () => {
                releaseFunction()
                document.removeEventListener('touchmove', touchMoveFunction)
            }, {once: true})        
        }

        const releaseFunction = () =>{
            if(this.currentX - this.startX > 75){
                this.currentPosition = (this.currentPosition - 1 + this.module.modules.length) % this.module.modules.length
            }else if (this.startX - this.currentX > 75){
                this.currentPosition = (this.currentPosition + 1) % this.module.modules.length
            }

            this.startX = 0.1
            this.currentX = 0.1
        }


    }
}
