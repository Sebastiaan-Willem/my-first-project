import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero = this.heroes[1];
  isImageVisible = true;

  clicked = 0;

  OnSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  HandleClicked() {
    if (this.clicked % 2 === 0) {
      this.selectedHero.imagePath = "http://placekitten.com/400/600"
      this.isImageVisible = true;
    }
    else {
      this.selectedHero.imagePath = "http://placekitten.com/600/400"
      this.isImageVisible = false;
    }

    this.clicked++;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
