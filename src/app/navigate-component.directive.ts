import { Directive,ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[NavComponentRef]'
})
export class NavigateComponent {

  constructor(public viewReference:ViewContainerRef) { }

}
