import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { MessagesService } from './messages.service';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private messagesService: MessagesService,
    private http: HttpClient) { }

    private heroesUrl = 'api/heroes';

  getHeroes(): Observable<Hero[]>{
    const heroes = of(HEROES);
    this.messagesService.addMessage('HeroService: Fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<Hero>{
    const hero = HEROES.find(x => x.id === id) as Hero;
    this.messagesService.addMessage(`HeroService: Fetched hero with id: ${id}.`)
    return of(hero);
    //of() wrap allows us to return ASYNC 
  }
}
