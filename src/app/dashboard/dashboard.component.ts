import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { PowerService } from '../power.service';
import { SuperPower } from '../superpower';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  powers: SuperPower[] = [];
 
  constructor(
    private heroService: HeroService,
    private powerService: PowerService) { }

  
  ngOnInit(): void {
    this.getHeroes();
    this.getSuperPowers();
  }

  getHeroes(): void{
    this.heroService.getHeroes()
      .subscribe(x => this.heroes = x.slice(1, 5));
  }

  getSuperPowers(): void {
    this.powerService.getSuperPowers()
    .subscribe(x => this.powers = x.sort(() => Math.random() - 0.5).slice(0, 4));
    //pseudo random sort from stack overflow for small arrays
  }

}
