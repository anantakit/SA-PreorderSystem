import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPreorderComponent } from './show-preorder.component';

describe('ShowPreorderComponent', () => {
  let component: ShowPreorderComponent;
  let fixture: ComponentFixture<ShowPreorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPreorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPreorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
