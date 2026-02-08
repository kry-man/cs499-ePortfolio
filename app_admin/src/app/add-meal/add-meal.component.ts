import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MealDataService } from '../services/meal-data.service';

@Component({
  selector: 'app-add-meal.component',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-meal.component.html',
  styleUrl: './add-meal.component.css',
})

export class AddMealComponent implements OnInit{

  public addForm!: FormGroup;
  submitted = false;

  constructor (
    private formBuilder: FormBuilder,
    private router: Router,
    private mealService: MealDataService
  ) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      _id: [],
      name: ['', Validators.required],
      image: ['', Validators.required],
      alt_name: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  public onSubmit() {
    this.submitted = true;
    if(this.addForm.valid) {
      this.mealService.addMeal(this.addForm.value)
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