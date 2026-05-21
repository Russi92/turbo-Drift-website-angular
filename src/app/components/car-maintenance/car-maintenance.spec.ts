import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarMaintenance } from './car-maintenance';

describe('CarMaintenance', () => {
  let component: CarMaintenance;
  let fixture: ComponentFixture<CarMaintenance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarMaintenance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarMaintenance);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
