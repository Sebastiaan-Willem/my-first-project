import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';
import { SuperPower} from './superpower';
import {SUPERPOWERS} from './mock-superpowers';


@Injectable({
  providedIn: 'root'
})
export class PowerService {

  constructor(private messagesService: MessagesService) { }

  getSuperPowers(): Observable<SuperPower[]>{
    const superpowers = of(SUPERPOWERS);
    this.messagesService.addMessage('PowerService: Fetched powers');
    return superpowers;
  }

  getSuperPower(id: number): Observable<SuperPower>{
    const power = SUPERPOWERS.find(x => x.id === id) as SuperPower;
    this.messagesService.addMessage(`PowerService: Fetched power with id: ${id}`);
    return of(power);
  } 
}
