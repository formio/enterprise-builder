import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSubmissionsComponent } from './submissions.component';

describe('SubmissionsComponent', () => {
  let component: FormSubmissionsComponent;
  let fixture: ComponentFixture<FormSubmissionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormSubmissionsComponent]
    });
    fixture = TestBed.createComponent(FormSubmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
