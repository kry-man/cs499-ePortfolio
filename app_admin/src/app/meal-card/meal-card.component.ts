import { Component, OnInit, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Meal } from '../models/meals';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-meal-card',
  imports: [CommonModule],
  templateUrl: './meal-card.component.html',
  styleUrl: './meal-card.component.css',
})
export class MealCardComponent implements OnInit{

  @Input('meal') meal: any;

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

  public editMeal(meal: Meal) {
    localStorage.removeItem('mealName');
    localStorage.setItem('mealNAme', meal.name);
    this.router.navigate(['edit-meal']);
  }
}