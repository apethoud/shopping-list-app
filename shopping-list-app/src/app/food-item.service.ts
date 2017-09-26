import { Injectable }     from '@angular/core';
import { Headers, Http }  from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { FoodItem } from './foodItem';

@Injectable()
export class FoodItemService {

  private foodItemsUrl = 'api/foodItems';

  constructor(private http: Http) { }

  getFoodItems(): Promise<FoodItem[]> {
    return this.http.get(this.foodItemsUrl)
    .toPromise()
    .then(response => response.json().data as FoodItem[])
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}