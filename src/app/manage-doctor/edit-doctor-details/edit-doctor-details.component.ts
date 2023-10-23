import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { doctorGenderType } from 'src/types/enums';
import { doctorDetails } from 'src/types/interfaces';

@Component({
  selector: 'app-edit-doctor-details',
  templateUrl: './edit-doctor-details.component.html',
  styleUrls: ['./edit-doctor-details.component.scss'],
})
export class EditDoctorDetailsComponent implements OnInit {

  /** initilization of doctorGenderType from doctorGenderType enum which contains the doctor's gender */
  public doctorGenderType = doctorGenderType;

  /** initilization of doctorGenderList from doctorGenderType enum which contains the list of values of all gender choices */
  public doctorGenderList = Object.values(doctorGenderType);

  /** used get selected doctor details to edit[input] from the parent(manage-doctor-component) */
  @Input() selectedDoctorDetails: doctorDetails | any;

  /** used to parse and store the previous date of birth of doctor */
  public previousDOB: string | any;

  /** declaration of form builder */
  public doctorInfo: FormBuilder | any;

  constructor(private modalCtrl: ModalController, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {

    /** used to parse and store the month of the doctor dob */
    const monthDOB = '0' + (this.selectedDoctorDetails.dob.getUTCMonth() + 1);

    /** used to parse and store the date of the doctor dob */
    const dateDOB = '0' + (this.selectedDoctorDetails.dob.getUTCDate() + 1);

    this.previousDOB = this.selectedDoctorDetails.dob.getUTCFullYear() + '-' + monthDOB.slice(-2) + '-' + dateDOB.slice(-2);

    /** defining the valiadation and initilizatoin of form builder */
    this.doctorInfo = this.formBuilder.group({
      doctorName: [this.selectedDoctorDetails.name, [Validators.required, Validators.maxLength(20)]],
      speciality: [this.selectedDoctorDetails.speciality, [Validators.required]],
      dob: [this.previousDOB, [Validators.required]],
      phoneNumber: [this.selectedDoctorDetails.phoneNumber, [Validators.required, Validators.pattern("^[0-9]{10}$")]],
      gender: [this.selectedDoctorDetails.gender, [Validators.required]]
    })

  }

  /** used to cancel the edit modal
   * @return data and a message[cancel]
   */
  cancelEditModal() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  /** used to save the edit modal 
   * @return data[contains the edited details] and a message[save]
   */
  saveEditModal() {
    return this.modalCtrl.dismiss(this.doctorInfo, 'save');
  }

  /**
   * used to check the required condition in validation
   * @param input accepts the input formcontrol
   * @returns boolean 
   */
  public required(input: String): boolean {
    return this.doctorInfo.get(input).errors?.required &&
      this.doctorInfo.get(input).touched
  }
}