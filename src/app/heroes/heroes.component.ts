import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessagesService } from '../messages.service';

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

  constructor(
    private heroService: HeroService, 
    private messageService: MessagesService) {
  }


  ngOnInit(): void {
    this.getHeroes();
  }

  // OnSelect(hero: Hero) {
  //   this.selectedHero = hero;
  //   this.messageService.addMessage(`HeroService: Clicked on:${hero.id} ${hero.name}`);
  // }

  // Get data async from database server
  // Subscribe -> Wait until method has been completed, then perform action
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(x => this.heroes = x);
  }

  // HandleClicked() {
  //   if (this.selectedHero) {
  //     if (this.clicked % 2 === 0) {
  //       this.selectedHero.imagePath = "http://placekitten.com/600/400"
  //     }
  //     else {
  //       this.selectedHero.imagePath = "http://placekitten.com/400/600"
  //     }
  //     this.clicked++;
  //   }
  // }
}
