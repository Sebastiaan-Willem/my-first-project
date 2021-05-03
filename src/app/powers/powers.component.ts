import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';
import { PowerService } from '../power.service';
import { SuperPower } from '../superpower';

@Component({
  selector: 'app-powers',
  templateUrl: './powers.component.html',
  styleUrls: ['./powers.component.css']
})
export class PowersComponent implements OnInit {
  superpowers: SuperPower[] = [];
  
  constructor(
    private powerService: PowerService,
    private messageService: MessagesService
  ) { }

  ngOnInit(): void {
    this.getSuperPowers();
  }

  getSuperPowers(): void {
    this.powerService.getSuperPowers()
    .subscribe(x => this.superpowers = x);
  }

}
