import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentFeedbackPageComponent } from './payment-feedback-page.component';

describe('PaymentFeedbackPageComponent', () => {
  let component: PaymentFeedbackPageComponent;
  let fixture: ComponentFixture<PaymentFeedbackPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentFeedbackPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentFeedbackPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
