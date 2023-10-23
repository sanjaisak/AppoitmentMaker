import { Component } from "@angular/core";
import { availableDoctorDetails } from "../manage-doctor/doctor-details";
import { doctorAvailabilityType } from "src/types/enums";

/**
 * Contains information of available slots
 */
export interface AvailableSlot {
  /**
   * Contains name of the doctor or other
   */
  name: string;
  /**
   * Contains starting time
   */
  startTime: string;
  /**
   * Contains ending time
   */
  endTime: string;
}

@Component({
  selector: "app-appointment-scheduler",
  templateUrl: "appointment-scheduler.component.html",
  styleUrls: ["appointment-scheduler.component.scss"],
})
export class AppointmentSchedularComponent {
  private _availableSlot: AvailableSlot[] = [];

  /**
   * Contains name of the doctor or other
   */
  public doctorName = "";

  /**
   * Contains starting time
   */
  public startTime = "";

  /**
   * Contains ending time
   */
  public endTime = "";

  /**
   * Used to get available slot
   *
   * @returns available slots
   */
  public get availableSlot() {
    return this._availableSlot;
  }

  /**
   * Used to get available doctor
   *
   * @returns available doctors
   */
  public getAvailableDoctor() {
    const doctors = availableDoctorDetails.filter(
      (doctor) => doctor.availability === doctorAvailabilityType.available
    );

    return doctors;
  }

  public createWorkSlot(name: string, startTime: string, endTime: string) {
    this._availableSlot.push({
      name: name,
      startTime: startTime,
      endTime: endTime,
    });

    console.log(this.availableSlot);
  }
}
