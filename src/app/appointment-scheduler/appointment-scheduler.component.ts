import { Component } from "@angular/core";
import { availableDoctorDetails } from "../manage-doctor/doctor-details";
import { doctorAvailabilityType } from "src/types/enums";

@Component({
  selector: "app-appointment-scheduler",
  templateUrl: "appointment-scheduler.component.html",
  styleUrls: ["appointment-scheduler.component.scss"],
})
export class AppointmentSchedularComponent {
  /**
   * initialization of doctor details from doctor-details file
   */
  public getAvailableDoctor() {
    const doctors = availableDoctorDetails.filter(
      (doctor) => doctor.availability === doctorAvailabilityType.available
    );

    return doctors;
  }
}
