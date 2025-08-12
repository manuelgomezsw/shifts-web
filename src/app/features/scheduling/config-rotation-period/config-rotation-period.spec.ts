import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigRotationPeriod } from './config-rotation-period';

describe('ConfigRotationPeriod', () => {
  let component: ConfigRotationPeriod;
  let fixture: ComponentFixture<ConfigRotationPeriod>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigRotationPeriod]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigRotationPeriod);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
