import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EfecPuntComponent } from './efec-punt.component';

describe('EfecPuntComponent', () => {
  let component: EfecPuntComponent;
  let fixture: ComponentFixture<EfecPuntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EfecPuntComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EfecPuntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
