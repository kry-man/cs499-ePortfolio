import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { lodgings } from '../data/lodgings';
import { RoomCardComponent } from '../room-card/room-card.component';

import { Room } from '../models/rooms'
import { RoomDataService } from '../services/room-data.service';

//import { Router } from '@angular/router';

//import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-room-listing',
  imports: [CommonModule, RoomCardComponent],
  templateUrl: './room-listing.component.html',
  styleUrl: './room-listing.component.css',
  providers: [RoomDataService]
})

export class RoomListingComponent implements OnInit{
  //lodgings: Array<any> = lodgings;
  lodgings!: Room[];
  message: string = '';


  constructor(
    private roomDataService: RoomDataService,
    //private router: Router,
    //private authenticationService: AuthenticationService
  ) {
    console.log('room-listing constructor');
  }

  //public addTrip(): void{
    //this.router.navigate(['add-trip']);
  //}

  private getStuff(): void{
    this.roomDataService.getRooms()
      .subscribe({
        next: (value: any) => {
          this.lodgings = value;
          if(value.length > 0)
          {
            this.message = 'There are ' + value.length + ' rooms available.';
          }
          else{
            this.message = 'There were no rooms retrieved from the database';
          }
          console.log(this.message);
        },
        error: (error: any) => {
          console.log('Error: ' + error);
        }
      })
    }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.getStuff();
  }

  //public isLoggedIn()
  //{
    //return this.authenticationService.isLoggedIn();
  //}
}