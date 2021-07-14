import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupOperationsComponent } from './group-operations.component';

describe('GroupOperationsComponent', () => {
  let component: GroupOperationsComponent;
  let fixture: ComponentFixture<GroupOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupOperationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
