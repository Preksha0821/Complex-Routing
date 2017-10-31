import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

//Hero class
export class Hero {
  constructor(public id: number, public name: string) { }
}
//Heroes array of objects
const HEROES = [
  new Hero(1, 'Mr.Dharmik'),
  new Hero(2, 'Mr.Nimish'),
  new Hero(3, 'Mr.Mahendra'),
  new Hero(4, 'Mr.Darshil'),
  new Hero(5, 'Mr.Kunal'),
  new Hero(6, 'Mr.Tejas'),
  new Hero(7, 'Mr.Arham'),
  new Hero(8, 'Mr.Shrey'),
];

@Injectable()
//HeroService to fetch heroes
export class HeroService {
  getHeroes() { return Observable.of(HEROES); }

  getHero(id: number | string) {
    return this.getHeroes()
    // (+) before `id` turns the string into a number
      .map(heroes => heroes.find(hero => hero.id === +id));
  }
}
