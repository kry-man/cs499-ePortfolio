import { Component, OnInit, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Room } from '../models/rooms';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-room-card',
  imports: [CommonModule],
  templateUrl: './room-card.component.html',
  styleUrl: './room-card.component.css',
})
export class RoomCardComponent implements OnInit{

  @Input('room') room: any;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {
    
  }

  public isLoggedIn() 
  {
    return this.authenticationService.isLoggedIn();
  }

  public editRoom(room: Room) {
    localStorage.removeItem('roomName');
    localStorage.setItem('roomName', room.name);
    this.router.navigate(['edit-room']);
  }
}