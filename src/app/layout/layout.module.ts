import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { SideNavBarComponent } from "../side-nav-bar/side-nav-bar.component";
import { ContainerComponent } from "../container/container.component";
import { ManageDoctorComponent } from "../manage-doctor/manage-doctor.component";
import { NavigateComponent } from "../navigate-component.directive";
import { EditDoctorDetailsComponent } from "../manage-doctor/edit-doctor-details/edit-doctor-details.component";
import { LayoutComponent } from "./layout.component";
@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ReactiveFormsModule],
  declarations: [
    LayoutComponent,
    SideNavBarComponent,
    ContainerComponent,
    ManageDoctorComponent,
    NavigateComponent,
    EditDoctorDetailsComponent,
  ],
})
export class HomePageModule {}
