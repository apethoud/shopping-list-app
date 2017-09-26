import { InMemoryDbService }  from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const foodItems = [
      { id: 0,  name: 'apple', iconPath: 'assets/icons/apple-1.png' },
      { id: 0,  name: 'asparagus', iconPath: 'assets/icons/asparagus.png' },
      { id: 0,  name: 'aubergine', iconPath: 'assets/icons/aubergine.png' },
      { id: 0,  name: 'avocado', iconPath: 'assets/icons/avocado.png' },
      { id: 0,  name: 'bacon', iconPath: 'assets/icons/bacon.png' },
      { id: 0,  name: 'banana', iconPath: 'assets/icons/banana.png' },
      { id: 0,  name: 'blueberries', iconPath: 'assets/icons/blueberries.png' }
    ];
    return {foodItems};
  }
}