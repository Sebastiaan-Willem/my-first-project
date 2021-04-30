import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  isImageVisible = true;

  clicked = 0;

  constructor(private heroService: HeroService) {
  }

  
  ngOnInit(): void {
    this.getHeroes();
  }

  OnSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  HandleClicked() {
    if (this.selectedHero) {
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
  }
}
