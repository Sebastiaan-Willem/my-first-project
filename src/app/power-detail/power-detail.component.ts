import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PowerService } from '../power.service';
import { SuperPower } from '../superpower';

@Component({
  selector: 'app-power-detail',
  templateUrl: './power-detail.component.html',
  styleUrls: ['./power-detail.component.css']
})
export class PowerDetailComponent implements OnInit {

  superpower: SuperPower | undefined;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private powerService: PowerService
  ) { }

  ngOnInit(): void {
    this.getSuperPower();
  }

  getSuperPower() : void {
    //get the ID from the URL and add it to a const
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.powerService.getSuperPower(id)
                    .subscribe(x => this.superpower = x);
                    //subscribe only works on ASYNC methods (return type Observable)
  }

  onBackButtonClicked(){
    this.location.back();
  }

}
