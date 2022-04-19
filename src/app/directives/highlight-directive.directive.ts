import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightDirective]'
})
export class HighlightDirectiveDirective {

  constructor(private elem: ElementRef) {
    this.elem.nativeElement.style.backgroundColor = '#f1f';
    this.elem.nativeElement.style.color = 'gold';
    this.elem.nativeElement.style.textAlign = 'center';
  }

}
