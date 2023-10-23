import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { BrowserModule } from "@angular/platform-browser";
import { AppointmentSchedularComponent } from "./appointment-scheduler.component";
import { FormsModule } from "@angular/forms";
import { SlotComponent } from "./slot/slot.component";

@NgModule({
  imports: [IonicModule, BrowserModule, FormsModule],
  declarations: [AppointmentSchedularComponent, SlotComponent],
})
export class AppointmentSchedulerModule {}
