import { Component, Input, Output, EventEmitter } from "@angular/core";
import { ContainerComponent } from "../container/container.component";
import { ManageDoctorComponent } from "../../manage-doctor/manage-doctor.component";
import { iconPath } from "src/types/paths";
interface sideBarData {
  path: string;
  name: string;
  component: any;
}
@Component({
  selector: "app-side-nav-bar",
  templateUrl: "./side-nav-bar.component.html",
  styleUrls: ["./side-nav-bar.component.scss"],
})
export class SideNavBarComponent {
  /** contains the path and name of the icons used in sidebar */
  public sideNavData: sideBarData[] = [
    { path: iconPath.home, name: "home", component: ContainerComponent },
    {
      path: iconPath.newDoctor,
      name: "appointment",
      component: ContainerComponent,
    },
    {
      path: iconPath.doctorStatus,
      name: "doctor status",
      component: ContainerComponent,
    },
    {
      path: iconPath.doctorManagement,
      name: "manage doctor",
      component: ManageDoctorComponent,
    },
    { path: iconPath.history, name: "history", component: ContainerComponent },
  ];
  constructor() {}

  /**
   * emits the menu item on navbar
   * @param navComponent takes the component of the menu item in navbar
   */
  sideMenuRoute(navComponent: any) {
    // this.sideBarRoute.emit(navComponent);
  }
}
