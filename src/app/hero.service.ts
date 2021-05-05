import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { MessagesService } from './messages.service';
//import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  

  constructor(
    private messagesService: MessagesService,
    private http: HttpClient) { }

    /**
     * 
     * From (mock) API
     */
    
    private heroesUrl = 'api/heroes';
    httpOptions = {
      headers: new HttpHeaders({'Content-type':'application/json'})
    };

    getHeroes(): Observable<Hero[]>{
      //API -> Http request, get array of heroes from specified URL
      const heroes = this.http.get<Hero[]>(this.heroesUrl);
      this.messagesService.addMessage('HeroService: Fetched heroes');

      return heroes;
      //don't need to add 'of()' to return , Observable<Type> as a return type is automatically async with APIs
    }

    getHero(id: number): Observable<Hero>{
      //Make Http API call -> get single Hero from specified URL
      const url = `${this.heroesUrl}/${id}`;
      const hero = this.http.get<Hero>(url);
      this.messagesService.addMessage(`HeroService: Fetched hero with id: ${id}.`)

      return hero;
    }

    addHero(hero: Hero): Observable<Hero> {

      return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions);      
    }
    
    updateHero(hero?: Hero): Observable<any>{
        //pass location, the data to update and options
        return this.http.put(this.heroesUrl, hero, this.httpOptions);
    }

    deleteHero(hero: Hero): Observable<Hero>{
      const url = `${this.heroesUrl}/${hero.id}`;
        return this.http.delete<Hero>(url, this.httpOptions);
    }

    // searchHeroes(query: string): Observable<Hero[]>{
    //   if(!query.trim()) {return of([]);}
    //   //null/empty check -> return empty array

    //   let users = this.http.get<Hero[]>(`${this.heroesUrl}/?name=${query}`);
    //                         //get heroes whose name is part of the query

    //   users?this.messagesService.addMessage(`HeroService: Users found.`):this.messagesService.addMessage(`HeroService: No users found.`);
    //   //shorthand for if/else below

    //   // if(users){
    //   //   this.messagesService.addMessage(`HeroService: Users found.`)
    //   // }
    //   // else{
    //   //   this.messagesService.addMessage(`HeroService: No users found.`)
    //   // }

    //   return users;
    // }

    
    /**
     * 
     * From Local File
     */

  // getHeroes(): Observable<Hero[]>{
  //   const heroes = of(HEROES);
  //   this.messagesService.addMessage('HeroService: Fetched heroes');
  //   return heroes;
  // }

  // getHero(id: number): Observable<Hero>{
  //   const hero = HEROES.find(x => x.id === id) as Hero;
  //   this.messagesService.addMessage(`HeroService: Fetched hero with id: ${id}.`)
  //   return of(hero);
  //   //of() wrap allows us to return ASYNC 
  // }
}
