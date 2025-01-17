import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import {PowersComponent} from './powers/powers.component';
import { HeroDetailComponent} from './hero-detail/hero-detail.component';
import { PowerDetailComponent} from './power-detail/power-detail.component';


const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch:'full'},
  {path: 'heroes', component: HeroesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'powers', component: PowersComponent},
  {path: 'detail/:id', component: HeroDetailComponent},
  {path: 'powerdetail/:id', component: PowerDetailComponent}
  //:id -> parameter om mee te kunnen geven 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
