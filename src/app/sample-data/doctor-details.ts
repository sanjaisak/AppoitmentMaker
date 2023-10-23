import { doctorAvailabilityType, doctorGenderType } from "src/types/enums";
import { DoctorDetails } from "src/types/interfaces";

export const doctorDetails: DoctorDetails[] = [
  {
    photo:
      "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg",
    name: "lisa",
    availability: doctorAvailabilityType.available,
    dob: new Date("08-07-1993"),
    phoneNumber: 9876543210,
    speciality: "ortho",
    gender: doctorGenderType.female,
  },
  {
    photo:
      "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg",
    name: "Jhon",
    availability: doctorAvailabilityType.available,
    dob: new Date("08-07-1993"),
    phoneNumber: 9876543210,
    speciality: "ortho",
    gender: doctorGenderType.male,
  },
  {
    photo:
      "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg",
    name: "erika",
    availability: doctorAvailabilityType.unAvailable,
    dob: new Date("08-20-1993"),
    phoneNumber: 9876543210,
    speciality: "ortho",
    gender: doctorGenderType.female,
  },
];
