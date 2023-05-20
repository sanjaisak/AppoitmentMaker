import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigateComponent } from '../navigate-component.directive';
import { ManageDoctorComponent } from '../manage-doctor/manage-doctor.component';
import { ContainerComponent } from '../container/container.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  /** contains weather sidebar is opened or closed  */
  public isSideBarOpen = false; 

  /** child reference for host directive */
  @ViewChild(NavigateComponent, { static: true })
  hostDirectiveChildReference!: NavigateComponent;

  constructor() {}

  /** loads the components dynamically while navigating through menubar 
   * @param accepts the component that is to be displayed
  */
  loadComponent(navComponent:any):void {
    this.hostDirectiveChildReference.viewReference.clear();
    this.hostDirectiveChildReference.viewReference.createComponent(navComponent);
  }
  /** used to toggle the sidebar */
  public sideBarToggle(): void {
    this.isSideBarOpen = !this.isSideBarOpen;
  } 
  
  ngOnInit(): void {
      /**
       * initially calls the loadcomponent with home container
       */
      this.loadComponent(ManageDoctorComponent);
  }
}
