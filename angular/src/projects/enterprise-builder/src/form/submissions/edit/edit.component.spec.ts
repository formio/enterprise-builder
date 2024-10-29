import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSubmissionEditComponent } from './edit.component';

describe('EditComponent', () => {
  let component: FormSubmissionEditComponent;
  let fixture: ComponentFixture<FormSubmissionEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormSubmissionEditComponent]
    });
    fixture = TestBed.createComponent(FormSubmissionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
