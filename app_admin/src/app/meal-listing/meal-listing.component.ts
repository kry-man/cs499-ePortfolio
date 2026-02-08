import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { foods } from '../data/foods';
import { MealCardComponent } from '../meal-card/meal-card.component';

import { Meal } from '../models/meals'
import { MealDataService } from '../services/meal-data.service';

import { Router } from '@angular/router';

//import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-meal-listing',
  imports: [CommonModule, MealCardComponent],
  templateUrl: './meal-listing.component.html',
  styleUrl: './meal-listing.component.css',
  providers: [MealDataService]
})

export class MealListingComponent implements OnInit{
  //foods: Array<any> = foods;
  foods!: Meal[];
  message: string = '';


  constructor(
    private mealDataService: MealDataService,
    private router: Router,
    //private authenticationService: AuthenticationService
  ) {
    console.log('meal-listing constructor');
  }

  public addMeal(): void{
    this.router.navigate(['add-meal']);
  }

  private getStuff(): void{
    this.mealDataService.getMeals()
      .subscribe({
        next: (value: any) => {
          this.foods = value;
          if(value.length > 0)
          {
            this.message = 'There are ' + value.length + ' meals available.';
          }
          else{
            this.message = 'There were no meals retrieved from the database';
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