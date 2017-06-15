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

      // console.log(this.el.nativeElement.childNodes[0].textContent);
      this.el.nativeElement.childNodes[0].style.display = "inline";
      this.el.nativeElement.style.backgroundColor = "lightgray";

      if(this.el.nativeElement.childNodes[0].textContent == 0){
        if(this.el.nativeElement.nextElementSibling){
          this.el.nativeElement.nextElementSibling.click()
        }
        if(this.el.nativeElement.previousElementSibling){
          this.el.nativeElement.previousElementSibling.click()
        }

      }else {
        if(this.el.nativeElement.nextElementSibling){
          if(this.el.nativeElement.nextElementSibling.childNodes[0].textContent == 0 && !this.el.nativeElement.nextElementSibling.clicked){
            this.el.nativeElement.nextElementSibling.click()
          }
        }
        if(this.el.nativeElement.previousElementSibling){
          if(this.el.nativeElement.previousElementSibling.childNodes[0].textContent == 0 && !this.el.nativeElement.previousElementSibling.clicked){
            this.el.nativeElement.previousElementSibling.click()
          }
        }
      }



      console.log(this)
      console.log(this.el.nativeElement.nextElementSibling)
      this.addCount.emit();
      this.clicked = true;
    }
  }


}
