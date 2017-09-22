import { Component }  from '@angular/core';

import { FoodItem }   from './foodItem';

const FOODITEMS: FoodItem[] = [
  { id: 1, name: "banana" },
  { id: 2, name: "carrot" },
  { id: 3, name: "apple" },
  { id: 4, name: "strawberry" },
  { id: 5, name: "orange" }
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shopping List';
  foodItems = FOODITEMS;
}
