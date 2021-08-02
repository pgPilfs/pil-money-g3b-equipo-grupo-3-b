import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositPesosComponent } from './deposit-pesos.component.html';

describe('DepositPesosComponent', () => {
  let component: DepositPesosComponent;
  let fixture: ComponentFixture<DepositPesosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DepositPesosComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositPesosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
