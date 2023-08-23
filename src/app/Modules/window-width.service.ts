import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class WindowWidthService {
    windowWidth: number = window.innerWidth
	minWidth: number = 800

    constructor() { 
        // Updates the width of the window
        window.addEventListener('resize', () => {
			this.windowWidth = window.innerWidth
    	})
    }
}
