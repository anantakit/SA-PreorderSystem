import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowShippingslipComponent } from './show-shippingslip.component';

describe('ShowShippingslipComponent', () => {
  let component: ShowShippingslipComponent;
  let fixture: ComponentFixture<ShowShippingslipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowShippingslipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowShippingslipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
