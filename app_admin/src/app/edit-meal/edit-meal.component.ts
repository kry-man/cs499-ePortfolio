import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MealDataService } from '../services/meal-data.service';
import { Meal } from '../models/meals';

@Component({
  selector: 'app-edit-meal.component',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-meal.component.html',
  styleUrl: './edit-meal.component.css',
})
export class EditMealComponent implements OnInit {

  public editForm!: FormGroup;
  meal!: Meal;
  submitted = false;
  message : string = '';

  constructor (
    private formBuilder: FormBuilder,
    private router: Router,
    private mealDataService: MealDataService
  ) { }

  ngOnInit(): void{

    // Retrieve meal name
    let mealName = localStorage.getItem("mealName");
    if (!mealName) {
      alert("Something wrong, couldn't find where I stashed mealName!");
      this.router.navigate(['']);
      return;
    }

    console.log('EditMealComponent::ngOnInit');
    console.log('mealName:' + mealName);

    this.editForm = this.formBuilder.group({
      _id: [],
      name: [mealName, Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required],
      room_rate: ['', Validators.required],
    })

    this.mealDataService.getMeal(mealName)
      .subscribe({
        next: (value: any) => {
          this.meal = value;
          // Populate our record into the form
          this.editForm.patchValue(value[0]);
          if(!value)
            {
              this.message = 'No Room Retrieved!';
            }
            else{
              this.message = 'Room: ' + mealName + 'retrieved';
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
      this.mealDataService.updateMeal(this.editForm.value)
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
