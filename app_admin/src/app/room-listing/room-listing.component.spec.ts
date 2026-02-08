import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomListingComponent } from './room-listing.component';

describe('RoomListingComponent', () => {
  let component: RoomListingComponent;
  let fixture: ComponentFixture<RoomListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomListingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomListingComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
