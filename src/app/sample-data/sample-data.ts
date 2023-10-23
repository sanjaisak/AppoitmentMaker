import {
  TokenStatus,
  doctorAvailabilityType,
  doctorGenderType,
} from "src/types/enums";
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

export const slotDetails = [
  {
    id: "1",
    name: "lisa",
    startTime: "2023-10-23T17:18",
    endTime: "2023-10-23T17:19",
    visitors: [
      {
        name: "sanjai",
        phoneNumber: "9629246824",
        status: TokenStatus.COMPLETED,
        startTime: "6:00 pm",
        endTime: "6:15 pm",
        tokenNumber: 1,
      },
      {
        name: "bharathi",
        phoneNumber: "9489191357",
        startTime: "6:17 pm",
        status: TokenStatus.INPROGRESS,
        tokenNumber: 2,
      },
      {
        name: "saran",
        phoneNumber: "9487717207",
        status: TokenStatus.NOT_STARTED,
        tokenNumber: 3,
      },
    ],
  },
];
