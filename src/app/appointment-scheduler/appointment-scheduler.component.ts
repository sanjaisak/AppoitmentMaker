import { Component } from "@angular/core";
import { doctorDetails } from "../sample-data/sample-data";
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
    const doctors = doctorDetails.filter(
      (doctor) => doctor.availability === doctorAvailabilityType.available
    );

    return doctors;
  }

  /**
   * Used to create new work slot
   *
   * @param name doctor or employee name
   * @param startTime start time for working hours
   * @param endTime end time for working hours
   */
  public createWorkSlot(name: string, startTime: string, endTime: string) {
    this._availableSlot.push({
      name: name,
      startTime: startTime,
      endTime: endTime,
    });
  }
}
