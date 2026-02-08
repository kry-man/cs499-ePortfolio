import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Meal } from '../models/meals'
import { User } from '../models/user'
import { AuthResponse } from '../models/auth-response';
import { BROWSER_STORAGE } from '../storage';
import { AuthDataServiceInterface } from '../auth-data-service.interface';

@Injectable({
  providedIn: 'root',
})
export class MealDataService implements AuthDataServiceInterface{
  
  constructor(private http: HttpClient,
    @Inject(BROWSER_STORAGE) private storage: Storage) { }

  private url = 'http://localhost:3000/api/meals';

  getMeals() :Observable<Meal[]> {
    return this.http.get<Meal[]>(this.url);
  }

  addMeal(formData: Meal) : Observable<Meal>{
    return this.http.post<Meal>(this.url, formData);
  }

  getMeal(mealName: string) : Observable<Meal[]> {
     console.log('Inside MealDataService::getMeals');
    return this.http.get<Meal[]>(this.url + '/' + mealName);
  }

  updateMeal(formData: Meal) : Observable<Meal> {
     console.log('Inside MealDataService::addMeals');
    return this.http.put<Meal>(this.url + '/' + formData.name, formData);
  }

  private handleError(error:any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }

  public login(user: User): Promise<AuthResponse>{
    return this.makeAuthApiCall('login', user);
  }

  public register(user: User): Promise<AuthResponse>{
    return this.makeAuthApiCall('register', user);
  }

  private makeAuthApiCall(urlPath: string, user: User): Promise<AuthResponse> {
    const url: string = `${'http://localhost:3000/api'}/${urlPath}`;
    return this.http
      .post(url, user)
      .toPromise()
      .then(response => response as AuthResponse)
      .catch(this.handleError);
  }
}