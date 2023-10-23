import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";
import { EditDoctorDetailsComponent } from "./edit-doctor-details.component";

describe("DoctorDetailsEditComponent", () => {
  let component: EditDoctorDetailsComponent;
  let fixture: ComponentFixture<EditDoctorDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [EditDoctorDetailsComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(EditDoctorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
