import { Directive,ElementRef ,OnInit } from '@angular/core';

@Directive({
  selector: '[appOwn]'
})
export class OwnDirective implements OnInit {

  constructor( private elementref:ElementRef) { }
  ngOnInit(): void {
      this.elementref.nativeElement.style.color = 'yellow';

  }

}
