import { doctorAvailabilityType, doctorGenderType } from "./enums";

/** @componentmanage-doctor
 * it is used to implement the details required for doctor
 */
export interface DoctorDetails {
  // contains the doctor photo
  photo: string;

  //contains the doctor name
  name: string;

  //contains the date of borth of doctor
  dob: Date;

  //represent the contact number of doctor
  phoneNumber: number;

  //stores the specialization of doctor
  speciality: string;

  //stores the availability of doctor
  availability: doctorAvailabilityType;

  //stores the gender of doctor
  gender: doctorGenderType;
}
