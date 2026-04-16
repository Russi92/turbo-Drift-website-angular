import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCars } from './new-cars';

describe('NewCars', () => {
  let component: NewCars;
  let fixture: ComponentFixture<NewCars>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewCars]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCars);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
