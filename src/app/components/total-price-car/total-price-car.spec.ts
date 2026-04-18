import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalPriceCar } from './total-price-car';

describe('TotalPriceCar', () => {
  let component: TotalPriceCar;
  let fixture: ComponentFixture<TotalPriceCar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalPriceCar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalPriceCar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
