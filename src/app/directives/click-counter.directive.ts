import {AfterViewInit, Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
    selector: 'button[appClickCounter]'
})
export class ClickCounterDirective implements AfterViewInit {
    ngAfterViewInit(): void {
        this.label = this.el.nativeElement.innerText;
        this.click();
    }

    private clicks = -1;
    private label?: string;

    @HostListener('click')
    click() {
        this.clicks++;
        this.el.nativeElement.innerText = `${this.label} - ${this.clicks}`;
    }

    constructor(private el: ElementRef<HTMLButtonElement>) {
    }

}
