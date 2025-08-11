import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigAbsences } from './config-absences';

describe('ConfigAbsences', () => {
  let component: ConfigAbsences;
  let fixture: ComponentFixture<ConfigAbsences>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigAbsences]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigAbsences);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
