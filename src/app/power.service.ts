import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';
import { SuperPower} from './superpower';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    httpOptions = {
      headers: new HttpHeaders({'Content-type':'application/json'})
    };

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

    addSuperPower(superpower: SuperPower) : Observable<SuperPower> {
      this.messagesService.addMessage(`PowerService: Added power with id: ${superpower.id}`);
      return this.http.post<SuperPower>(this.superpowersUrl, superpower, this.httpOptions)
    }

    updateSuperPower(superpower?: SuperPower) : Observable<any>  {
      this.messagesService.addMessage(`PowerService: Updated power`);
      return this.http.put(this.superpowersUrl, superpower, this.httpOptions)
    }

    deleteSuperPower(superpower: SuperPower) : Observable<SuperPower> {
      const url = `${this.superpowersUrl}/${superpower.id}`;
      this.messagesService.addMessage(`PowerService: Deleted power with id: ${superpower.id}`);
        return this.http.delete<SuperPower>(url, this.httpOptions);
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
