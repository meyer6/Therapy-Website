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

    // Called when user tries to drag the carousel to move it
    drag(event: MouseEvent | TouchEvent){
        // Determines if event is from mouse (Desktop) or touch (Mobile)
        if(event instanceof MouseEvent){
            
            // Defines the starting x coordinate to determine how to move the carousel
            this.startX = event.clientX
            this.currentX = event.clientX

            // Updates the current mouse postion
            const mouseMoveFunction = (event: MouseEvent) => {
                this.currentX = event.clientX
            }
            document.addEventListener('mousemove', mouseMoveFunction)        
        
            // Moves the carousel if necessary
            document.addEventListener('mouseup', () => {
                releaseFunction()
                document.removeEventListener('mousemove', mouseMoveFunction)
            }, {once: true})
        }else{
            // Same as previous but for mobile
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
            // Determines how and if the carousel should move
            if(this.currentX - this.startX > 75){
                this.currentPosition = (this.currentPosition - 1 + this.module.modules.length) % this.module.modules.length
            }else if (this.startX - this.currentX > 75){
                this.currentPosition = (this.currentPosition + 1) % this.module.modules.length
            }

            // Resets the x values for next move
            this.startX = 0.1
            this.currentX = 0.1
        }
    }
}
