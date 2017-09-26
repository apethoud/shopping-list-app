import { InMemoryDbService }  from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const foodItems = [
      { id: 0,  name: 'apple' },
      { id: 0,  name: 'asparagus' },
      { id: 0,  name: 'aubergine' },
      { id: 0,  name: 'avocado' },
      { id: 0,  name: 'bacon' },
      { id: 0,  name: 'banana' },
      { id: 0,  name: 'blueberries' }
    ];
    return {foodItems};
  }
}