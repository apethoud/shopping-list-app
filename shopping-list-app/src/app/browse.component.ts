import { Component, OnInit }  from '@angular/core';

import { FoodItem }           from './foodItem';
import { FoodItemService }     from './food-item.service'

@Component({
  selector: 'browse',
  templateUrl: './browse.component.html',
  styleUrls: [ './browse.component.css' ]
})

export class BrowseComponent implements OnInit {

  title = 'Browse';

  foodItems: FoodItem[] = [];

  constructor(private foodItemService: FoodItemService) { }

  ngOnInit(): void {
    this.foodItemService.getFoodItems()
    .then(foodItems => this.foodItems = foodItems);
  }
}