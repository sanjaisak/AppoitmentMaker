import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Validators, FormBuilder } from '@angular/forms';
import { doctorAvailabilityType, doctorGenderType } from '../../types/enums';
import { doctorDetails } from '../../types/interfaces';
import { availableDoctorDetails } from './doctor-details';
import { EditDoctorDetailsModalComponent } from '../edit-doctorDetails-modal.component/edit-doctorDetails-modal.component';

@Component({
  selector: 'app-manage-doctor',
  templateUrl: './manage-doctor.component.html',
  styleUrls: ['./manage-doctor.component.scss'],
})

export class ManageDoctorComponent {

  /** initilization of doctorAvailabilityType from doctorAvailabilityType enum which contains the weather the doctor is available or unavailable or removed */
  public doctorAvailabilityType = doctorAvailabilityType;

  /** initilization of doctorGenderList from doctorGenderType enum which contains the list of values of all gender choices */
  public doctorGenderList = Object.values(doctorGenderType);

  /** declaration of form builder */
  public doctorInfo: FormBuilder | any;

  /** used to temparorly store doctor data */
  public details: doctorDetails | any;

  /** initilization of doctor details from doctor-details file */
  public availableDoctorDetails = availableDoctorDetails;

  constructor(private formBuilder: FormBuilder, private modalCtrl: ModalController) {
    /** defining the valiadation and initilizatoin of form builder */
    this.doctorInfo = this.formBuilder.group({
      doctorName: ['', [Validators.required, Validators.maxLength(20)]],
      speciality: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern("^[0-9]{10}$")]],
      gender: ['', [Validators.required]]
    })
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

  /**
  * used to change the doctor status
  * @param doctorId accepts the index of the doctor in availableDoctorDetails
  * @param changeStatus accepts to which the doctor's status to be changed
  */
  public changeDoctorStatus(doctorId: number, changeStatus: doctorAvailabilityType) {
    this.availableDoctorDetails[doctorId].availability = changeStatus;
  }

  /**
   * used to add the new doctor to the list
   */
  public storeDoctorInfo() {
    this.details = {
      photo: "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg",
      name: this.doctorInfo.get('doctorName').value,
      availability: doctorAvailabilityType.available,
      dob: new Date(this.doctorInfo.get('dob').value),
      phoneNumber: Number(this.doctorInfo.get('phoneNumber').value),
      speciality: this.doctorInfo.get('speciality').value,
      gender: this.doctorInfo.get('gender').value
    }
    this.availableDoctorDetails.push(this.details);
    this.doctorInfo.reset();
  }

  /**
   * used to open the modal for editing the doctor details
   * @param selectedDoctorDetails accepts the selected doctor details object to be edited
   */
  public async editModalOpen(selectedDoctorDetails: doctorDetails) {

    /** used to crteate the edit modal and store the reference */
    const editModal = await this.modalCtrl.create({
      component: EditDoctorDetailsModalComponent,
      componentProps: {
        selectedDoctorDetails: selectedDoctorDetails
      }
    });

    /** presents or displays the model to the view */
    editModal.present();

    const { data, role } = await editModal.onWillDismiss();

    if (role === 'save') {
      selectedDoctorDetails.name = data.get('doctorName').value;
      selectedDoctorDetails.speciality = data.get('speciality').value;
      selectedDoctorDetails.dob = new Date(data.get('dob').value);
      selectedDoctorDetails.gender = data.get('gender').value;
      selectedDoctorDetails.phoneNumber = data.get('phoneNumber').value;
    }
  }
}
