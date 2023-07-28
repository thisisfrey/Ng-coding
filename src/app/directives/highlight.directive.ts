import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
    selector: 'div[appHighlight]'
})
export class HighlightDirective {


    // add action (function) on element
    @HostListener('mouseenter') onMouseEnter() {
        console.log("Hovered!");
        this.el.nativeElement.style.backgroundColor = "yellow";
    }

    @HostListener('mouseleave') onMouseLeave() {
        console.log("Hovered!");
        this.el.nativeElement.style.backgroundColor = "transparent";
    }


    // always applied styles
    constructor(private el: ElementRef<HTMLElement>) {
        this.el.nativeElement.style.fontSize = "80px";
    }
}
