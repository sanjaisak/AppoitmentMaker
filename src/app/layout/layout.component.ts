import { Component, OnInit, ViewChild } from "@angular/core";
import { NavigateComponent } from "../navigate-component.directive";
import { ManageDoctorComponent } from "../manage-doctor/manage-doctor.component";
import { ContainerComponent } from "../container/container.component";

@Component({
  selector: "app-layout",
  templateUrl: "layout.component.html",
  styleUrls: ["layout.component.scss"],
})
export class LayoutComponent {
  constructor() {}
}
