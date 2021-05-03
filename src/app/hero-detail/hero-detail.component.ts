import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // Make parameter an input param -> Can be filled from outside this class.
  //@Input() hero?: Hero;

  hero: Hero | undefined;

  constructor(
    private route: ActivatedRoute,
    //ActivatedRoute -> used to extract parameters from URLs
    private location: Location,  
    //Location -> Service for interacting with browser. Use it to navigate "back"  
    private heroService: HeroService
    //HeroService our own service used to fetch data from 'DB'
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero():void {
    //get the ID from the URL and add it to a const
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
                    .subscribe(x => this.hero = x);
                    //subscribe only works on ASYNC methods (return type Observable)
  }

  onBackButtonClicked() : void{
    this.location.back();
  }

  SaveHero(): void{
    this.heroService.updateHero(this.hero).subscribe(() => this.onBackButtonClicked());
  }
}