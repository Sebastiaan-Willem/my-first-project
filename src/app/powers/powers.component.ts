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
  newSuperPower: SuperPower = {
    name: '',
    type: '',
    isOverpowered: false
  };
 
  
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


  // addPower(name: string, type: string, isOverpowered: boolean) : void
  // {
  //   name = name.trim();
  //   type = type.trim();
  //   if(!name || !type){return;}
  //   this.powerService.addSuperPower({name, type, isOverpowered} as SuperPower)
  //                     .subscribe(x => this.superpowers.push(x));
  // }

  addPower(power: SuperPower) : void
  {
    if(!power){return;}
    this.powerService.addSuperPower(power)
                      .subscribe(x => this.superpowers.push(x));
                      
    this.newSuperPower.name = '';
    this.newSuperPower.type = '';
    this.newSuperPower.isOverpowered = false;
  }

  deletePower(power: SuperPower)
  {
    if(!power){return;}
    this.powerService.deleteSuperPower(power)
                    .subscribe(() => this.superpowers = this.superpowers.filter(x => x != power));
                    //get everythingthing that's NOT equal to the to be deleted element
  }

}
