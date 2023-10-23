/**
 * has the all the types of the doctor status
 */
export enum doctorAvailabilityType {
  /** indicates that the doctor is available for appointment */
  available,

  /** indicates that the doctor is unavailable for appointment */
  unAvailable,

  /** indicates that the doctor is on leave */
  removed,
}

export enum doctorGenderType {
  /** indicates that the doctor is male */
  male = "Male",

  /** indicates that the doctor is female */
  female = "Female",

  /** indicates that the doctor is neither male nor female */
  other = "Other",
}

/**
 * contains the token status
 */
export enum TokenStatus {
  /** indicates that the token is not yet started */
  NOT_STARTED = "Not Started",
  /** indicates that the token is inprogress */
  INPROGRESS = "Inprogress",
  /** indicates that the token is completed */
  COMPLETED = "Completed",
}
