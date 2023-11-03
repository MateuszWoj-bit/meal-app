import { Component } from '@angular/core';
import { MealService } from '../meal.service';

@Component({
  selector: 'meal-search',
  template: `
    <h1>Meal Details</h1>
    <button (click)="searchMeal('Arrabiata')">Search Arrabiata</button>
    <div *ngIf="meal">
      <h2>{{ meal.strMeal }}</h2>
      <p>{{ meal.strInstructions }}</p>
    </div>
  `,
})
export class MealSearch {
  meal: any;

  constructor(private mealService: MealService) {}

  searchMeal(name: string) {
    this.mealService.getMealsByName(name).subscribe((data) => {
      this.meal = data.meals[0];
    });
  }
}
