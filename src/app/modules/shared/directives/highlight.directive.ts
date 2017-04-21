import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[highlight]'
})
export class HighlightDirective {
 constructor(el: ElementRef) {
       el.nativeElement.style.backgroundColor = 'yellow';
    }
}