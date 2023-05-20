import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { SideNavBarComponent } from '../side-nav-bar/side-nav-bar.component';
import { ContainerComponent } from '../container/container.component';
import { ManageDoctorComponent } from '../manage-doctor/manage-doctor.component';
import { NavigateComponent } from '../navigate-component.directive';
import { EditDoctorDetailsModalComponent } from '../edit-doctorDetails-modal.component/edit-doctorDetails-modal.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [HomePage,SideNavBarComponent,ContainerComponent,ManageDoctorComponent,NavigateComponent,EditDoctorDetailsModalComponent]
})
export class HomePageModule {}
