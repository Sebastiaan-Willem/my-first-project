import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';
import { SuperPower} from './superpower';
import { HttpClient } from '@angular/common/http';
//import {SUPERPOWERS} from './mock-superpowers';


@Injectable({
  providedIn: 'root'
})
export class PowerService {

  constructor(
    private messagesService: MessagesService,
    private http: HttpClient) { }

    /**
     * 
     * From (mock) API
     */

    private superpowersUrl = 'api/superpowers';

    getSuperPowers(): Observable<SuperPower[]>{
      const superpowers = this.http.get<SuperPower[]>(this.superpowersUrl);
      this.messagesService.addMessage('PowerService: Fetched powers');

      return superpowers;
    }

    getSuperPower(id: number): Observable<SuperPower>{
      const url = `${this.superpowersUrl}/${id}`;
      const power = this.http.get<SuperPower>(url);
      this.messagesService.addMessage(`PowerService: Fetched power with id: ${id}`);

      return power;
    } 


    /**
     * 
     * From Local File
     */

  // getSuperPowers(): Observable<SuperPower[]>{
  //   const superpowers = of(SUPERPOWERS);
  //   this.messagesService.addMessage('PowerService: Fetched powers');
  //   return superpowers;
  // }

  // getSuperPower(id: number): Observable<SuperPower>{
  //   const power = SUPERPOWERS.find(x => x.id === id) as SuperPower;
  //   this.messagesService.addMessage(`PowerService: Fetched power with id: ${id}`);
  //   return of(power);
  // } 
}
