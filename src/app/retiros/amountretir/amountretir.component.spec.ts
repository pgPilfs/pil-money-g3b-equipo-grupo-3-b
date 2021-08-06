import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountretirComponent } from './amountretir.component';

describe('AmountretirComponent', () => {
  let component: AmountretirComponent;
  let fixture: ComponentFixture<AmountretirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmountretirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountretirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
