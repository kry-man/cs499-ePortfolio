import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealListingComponent } from './meal-listing.component';

describe('MealListingComponent', () => {
  let component: MealListingComponent;
  let fixture: ComponentFixture<MealListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MealListingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealListingComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
