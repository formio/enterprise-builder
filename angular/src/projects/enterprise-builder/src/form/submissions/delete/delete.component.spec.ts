import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSubmissionDeleteComponent } from './delete.component';

describe('DeleteComponent', () => {
  let component: FormSubmissionDeleteComponent;
  let fixture: ComponentFixture<FormSubmissionDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormSubmissionDeleteComponent]
    });
    fixture = TestBed.createComponent(FormSubmissionDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
