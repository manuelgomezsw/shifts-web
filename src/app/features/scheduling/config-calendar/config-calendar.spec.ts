import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigCalendar } from './config-calendar';

describe('ConfigCalendar', () => {
  let component: ConfigCalendar;
  let fixture: ComponentFixture<ConfigCalendar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigCalendar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigCalendar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
