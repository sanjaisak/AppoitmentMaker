import { NgModule } from "@angular/core";
import { ManageDoctorComponent } from "./manage-doctor.component";
import { EditDoctorDetailsComponent } from "./edit-doctor-details/edit-doctor-details.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ReactiveFormsModule],
  declarations: [ManageDoctorComponent, EditDoctorDetailsComponent],
})
export class ManageDoctorModule {}
