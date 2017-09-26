import { InMemoryDbService }  from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const foodItems = [
      { id: 0,  name: 'apples', iconPath: 'assets/icons/apple-1.png' },
      { id: 1,  name: 'asparagus', iconPath: 'assets/icons/asparagus.png' },
      { id: 2,  name: 'aubergine', iconPath: 'assets/icons/aubergine.png' },
      { id: 3,  name: 'avocados', iconPath: 'assets/icons/avocado.png' },
      { id: 4,  name: 'bacon', iconPath: 'assets/icons/bacon.png' },
      { id: 5,  name: 'bananas', iconPath: 'assets/icons/banana.png' },
      { id: 6,  name: 'blueberries', iconPath: 'assets/icons/blueberries.png' },
      { id: 7,  name: 'bread', iconPath: 'assets/icons/bread-1.png' },
      { id: 8,  name: 'broccoli', iconPath: 'assets/icons/broccoli.png' },
      { id: 9,  name: 'peanut butter', iconPath: 'assets/icons/butter.png' },
      { id: 10,  name: 'cabbage', iconPath: 'assets/icons/cabbage.png' },
      { id: 11,  name: 'soda', iconPath: 'assets/icons/can.png' },
      { id: 12,  name: 'candy', iconPath: 'assets/icons/candy.png' },
      { id: 13,  name: 'carrots', iconPath: 'assets/icons/carrot.png' },
      { id: 14,  name: 'cauliflower', iconPath: 'assets/icons/cauliflower.png' },
      { id: 15,  name: 'cereal', iconPath: 'assets/icons/cereals.png' },
      { id: 16,  name: 'cheese', iconPath: 'assets/icons/cheese-1.png' },
      { id: 17,  name: 'cherries', iconPath: 'assets/icons/cherries.png' },
      { id: 18,  name: 'chilis', iconPath: 'assets/icons/chili.png' },
      { id: 19,  name: 'chips', iconPath: 'assets/icons/chips.png' },
      { id: 20,  name: 'chives', iconPath: 'assets/icons/chives.png' },
      { id: 21,  name: 'chocolate', iconPath: 'assets/icons/chocolate.png' },
      { id: 22,  name: 'coconut', iconPath: 'assets/icons/coconut.png' },
      { id: 23,  name: 'coffee', iconPath: 'assets/icons/coffee.png' },
      { id: 24,  name: 'cookies', iconPath: 'assets/icons/cookies.png' },
      { id: 25,  name: 'corn', iconPath: 'assets/icons/corn.png' },
    ];
    return {foodItems};
  }
}