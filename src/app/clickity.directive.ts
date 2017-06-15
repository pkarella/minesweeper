import { Directive, ElementRef, HostListener, Input, Output, EventEmitter, Renderer } from '@angular/core';

@Directive({
  selector: '[appClickity]'
})
export class ClickityDirective {


constructor(private el: ElementRef, private renderer: Renderer){
}
  clicked= false;

  @Output() addCount = new EventEmitter();

  @HostListener('click') onClick() {
    this.highlight('yellow');
  }

  private highlight(color: string) {
    if(!this.clicked){
      // this.el.nativeElement.nextElementSibling.style.backgroundColor = "blue";
      // console.log(this.el.nativeElement.childNodes[0].textContent);
      this.el.nativeElement.childNodes[0].style.display = "inline";
      this.el.nativeElement.style.backgroundColor = "lightgray";
      // this.el.nativeElement.childNodes[0].style.backgroundColor = color;
      console.log(this)
      this.addCount.emit();
      this.clicked = true;
    }
  }


}
