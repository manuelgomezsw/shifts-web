import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigSchedules } from './config-schedules';

describe('ConfigSchedules', () => {
  let component: ConfigSchedules;
  let fixture: ComponentFixture<ConfigSchedules>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigSchedules]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigSchedules);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
