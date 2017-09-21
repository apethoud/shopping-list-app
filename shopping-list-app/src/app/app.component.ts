import { Component }  from '@angular/core';

import { FoodItem }   from './foodItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shopping List App';
  foodItem: FoodItem = {
    id: 1,
    name: 'banana'
  };
}
