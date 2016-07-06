import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

const HEROES: Hero[] = [
  { id: 1, name: 'Wolverine' },
  { id: 2, name: 'Deadpool' },
  { id: 3, name: 'Magneto' },
  { id: 4, name: 'Batman' },
  { id: 5, name: 'Gandalf' }
];



@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css']
})

export class AppComponent {
  title = 'Tour of Hero';
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
