import { Routes } from '@angular/router';
import { AddTripComponent } from './add-trip/add-trip.component';
import { TripListingComponent } from './trip-listing/trip-listing.component';
import { EditTripComponent } from './edit-trip/edit-trip.component';
import { LoginComponent } from './login/login.component';
import { MealListingComponent } from './meal-listing/meal-listing.component';
import { AddMealComponent } from './add-meal/add-meal.component';
import { EditMealComponent } from './edit-meal/edit-meal.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { EditRoomComponent } from './edit-room/edit-room.component';
import { RoomListingComponent } from './room-listing/room-listing.component';

export const routes: Routes = [
    { path: 'add-trip', component: AddTripComponent },
    { path: 'edit-trip', component: EditTripComponent },
    { path: 'add-meal', component: AddMealComponent },
    { path: 'edit-meal', component: EditMealComponent },
    { path: 'add-room', component: AddRoomComponent },
    { path: 'edit-room', component: EditRoomComponent },
    { path: 'login', component: LoginComponent },
    { path: '', component: TripListingComponent, pathMatch: 'full'},
    { path: '', component: MealListingComponent, pathMatch: 'full'},
    { path: '', component: RoomListingComponent, pathMatch: 'full'}
];
