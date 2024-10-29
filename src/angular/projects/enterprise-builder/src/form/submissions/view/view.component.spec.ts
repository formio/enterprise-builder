import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSubmissionViewComponent } from './view.component';

describe('ViewComponent', () => {
  let component: FormSubmissionViewComponent;
  let fixture: ComponentFixture<FormSubmissionViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormSubmissionViewComponent]
    });
    fixture = TestBed.createComponent(FormSubmissionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
