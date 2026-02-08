import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RoomDataService } from '../services/room-data.service';

@Component({
  selector: 'app-add-room.component',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-room.component.html',
  styleUrl: './add-room.component.css',
})

export class AddRoomComponent implements OnInit{

  public addForm!: FormGroup;
  submitted = false;

  constructor (
    private formBuilder: FormBuilder,
    private router: Router,
    private roomService: RoomDataService
  ) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      _id: [],
      name: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required],
      room_rate: ['', Validators.required],
    });
  }

  public onSubmit() {
    this.submitted = true;
    if(this.addForm.valid) {
      this.roomService.addRoom(this.addForm.value)
      .subscribe( {
        next: (date: any) => {
          console.log(date);
          this.router.navigate(['']);
        },
        error: (error: any) => {
          console.log('Error: ' + error);
        }
      });
    }
  }
  // get the form short name to access the form fields
  get f() {return this.addForm.controls;}
}