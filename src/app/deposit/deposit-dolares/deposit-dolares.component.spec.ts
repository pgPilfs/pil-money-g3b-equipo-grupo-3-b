import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositDolaresComponent } from './deposit-dolares.component';

describe('DepositDolaresComponent', () => {
  let component: DepositDolaresComponent;
  let fixture: ComponentFixture<DepositDolaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DepositDolaresComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositDolaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
