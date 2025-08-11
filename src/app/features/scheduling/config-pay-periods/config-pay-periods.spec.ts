import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigPayPeriods } from './config-pay-periods';

describe('ConfigPayPeriods', () => {
  let component: ConfigPayPeriods;
  let fixture: ComponentFixture<ConfigPayPeriods>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigPayPeriods]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigPayPeriods);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
