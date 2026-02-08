import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { TripListingComponent } from './trip-listing/trip-listing.component';
import { MealListingComponent } from './meal-listing/meal-listing.component';
import { RoomListingComponent } from './room-listing/room-listing.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, NavbarComponent, TripListingComponent, MealListingComponent, RoomListingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Travlr Getaways Admin!';
}
