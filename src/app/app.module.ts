import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

import { FormsModule } from '@angular/forms';
import { MijnpipePipe } from './mijnpipe.pipe';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PowerDetailComponent } from './power-detail/power-detail.component';
import { PowersComponent } from './powers/powers.component';

//Provides communication between Angular and API
import {HttpClientModule} from '@angular/common/http';
//import only for MOCK API
import { HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { HeroSearchComponent } from './hero-search/hero-search.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    MijnpipePipe,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    PowerDetailComponent,
    PowersComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
