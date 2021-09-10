import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAccComponent } from './bank-acc.component';

describe('BankAccComponent', () => {
  let component: BankAccComponent;
  let fixture: ComponentFixture<BankAccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankAccComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
