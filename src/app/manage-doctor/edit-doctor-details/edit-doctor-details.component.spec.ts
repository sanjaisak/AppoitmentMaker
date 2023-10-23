import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditDoctorDetailsModalComponent } from './edit-doctor-details.component';

describe('DoctorDetailsEditModalComponent', () => {
  let component: EditDoctorDetailsModalComponent;
  let fixture: ComponentFixture<EditDoctorDetailsModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDoctorDetailsModalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditDoctorDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
