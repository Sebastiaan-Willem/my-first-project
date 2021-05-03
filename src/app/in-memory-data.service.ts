import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo} from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Hero } from './hero';
import { SuperPower } from './superpower';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb(){
      const heroes = [
        {id: 11, name: 'Dr. Nice', imagePath: "http://placekitten.com/400/600"},
        {id: 12, name: 'Narco', imagePath: "http://placekitten.com/400/600"},
        {id: 13, name: 'Bombasto', imagePath: "http://placekitten.com/400/600"},
        {id: 14, name: 'Celeritas', imagePath: "http://placekitten.com/400/600"},
        {id: 15, name: 'Magneta', imagePath: "http://placekitten.com/400/600"},
        {id: 16, name: 'RubberMan', imagePath: "http://placekitten.com/400/600"},
        {id: 17, name: 'Dynama', imagePath: "http://placekitten.com/400/600"},
        {id: 18, name: 'Dr. IQ', imagePath: "http://placekitten.com/400/600"},
        {id: 19, name: 'Magma', imagePath: "http://placekitten.com/400/600"},
        {id: 20, name: 'Tornado', imagePath: "http://placekitten.com/400/600"},
    ];

    const superpowers:SuperPower[] = [
      {id: 1, name: 'Speed', type: 'physical', isOverpowered: false  },
      {id: 2, name: 'Regeneration', type: 'physical', isOverpowered: true  },
      {id: 3, name: 'Teleportation', type: 'psychic', isOverpowered: false },
      {id: 4, name: 'Mind-Control', type: 'psychic', isOverpowered: true },
      {id: 5, name: 'Invisibility', type: 'physical', isOverpowered: false },
      {id: 6, name: 'Foresight', type: 'psychic', isOverpowered: true },
      {id: 7, name: 'Lightning-fist', type: 'elemental', isOverpowered: false },
      {id: 8, name: 'Acid-breath', type: 'elemental', isOverpowered: false },
      {id: 9, name: 'Flame-body', type: 'elemental', isOverpowered: false },
      {id: 10, name: 'Strenght', type: 'physical', isOverpowered: false },
  ];

    return {heroes, superpowers};
  };
}
