import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ManageDoctorComponent } from "./manage-doctor/manage-doctor.component";
import { LayoutComponent } from "./layout/layout.component";
import { AppointmentSchedularComponent } from "./appointment-scheduler/appointment-scheduler.component";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "manage-doctor",
        component: ManageDoctorComponent,
      },
      {
        path: "appointment-scheduler",
        component: AppointmentSchedularComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
