import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftPlanning } from './shift-planning';

describe('ShiftPlanning', () => {
  let component: ShiftPlanning;
  let fixture: ComponentFixture<ShiftPlanning>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShiftPlanning]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShiftPlanning);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
