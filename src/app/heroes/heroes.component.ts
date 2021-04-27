import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'windstorm',
    imagePath: ""
  };

  clicked = 0;

  HandleClicked() {
    if (this.clicked % 2 === 0) {
      this.hero.imagePath = "http://placekitten.com/400/600"
    }
    else {
      this.hero.imagePath = "http://placekitten.com/600/400"
    }

    this.clicked++;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
