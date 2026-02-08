import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RoomDataService } from '../services/room-data.service';
import { Room } from '../models/rooms';

@Component({
  selector: 'app-edit-room.component',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-room.component.html',
  styleUrl: './edit-room.component.css',
})
export class EditRoomComponent implements OnInit {

  public editForm!: FormGroup;
  room!: Room;
  submitted = false;
  message : string = '';

  constructor (
    private formBuilder: FormBuilder,
    private router: Router,
    private roomDataService: RoomDataService
  ) { }

  ngOnInit(): void{

    // Retrieve room name
    let roomName = localStorage.getItem("roomName");
    if (!roomName) {
      alert("Something wrong, couldn't find where I stashed roomName!");
      this.router.navigate(['']);
      return;
    }

    console.log('EditRoomComponent::ngOnInit');
    console.log('roomName:' + roomName);

    this.editForm = this.formBuilder.group({
      _id: [],
      name: [roomName, Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required],
      room_rate: ['', Validators.required],
    })

    this.roomDataService.getRoom(roomName)
      .subscribe({
        next: (value: any) => {
          this.room = value;
          // Populate our record into the form
          this.editForm.patchValue(value[0]);
          if(!value)
            {
              this.message = 'No Room Retrieved!';
            }
            else{
              this.message = 'Room: ' + roomName + 'retrieved';
            }
            console.log(this.message);
        },
        error: (error: any) => {
          console.log('Error: ' + error);
        }
      })
  }

  public onSubmit() 
  {
    this.submitted = true;

    if(this.editForm.valid) 
      {
      this.roomDataService.updateRoom(this.editForm.value)
      .subscribe( {
        next: (value: any) => {
          console.log(value);
          this.router.navigate(['']);
        },
        error: (error: any) => {
          console.log('Error: ' + error);
        }
      });
    }
  }
  // get the form short name to access the form fields
  get f() {return this.editForm.controls;}
}
