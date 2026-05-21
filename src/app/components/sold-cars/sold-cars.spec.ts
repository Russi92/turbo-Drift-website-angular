import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoldCars } from './sold-cars';

describe('SoldCars', () => {
  let component: SoldCars;
  let fixture: ComponentFixture<SoldCars>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoldCars]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoldCars);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
