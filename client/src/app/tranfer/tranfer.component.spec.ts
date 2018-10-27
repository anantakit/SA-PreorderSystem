import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranferComponent } from './tranfer.component';

describe('TranferComponent', () => {
  let component: TranferComponent;
  let fixture: ComponentFixture<TranferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
