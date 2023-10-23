import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { LayoutModule } from "./layout/layout.module";
import { ManageDoctorModule } from "./manage-doctor/manager-doctor.module";
import { AppointmentSchedulerModule } from "./appointment-scheduler/appointment-scheduler.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    LayoutModule,
    ManageDoctorModule,
    AppointmentSchedulerModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
