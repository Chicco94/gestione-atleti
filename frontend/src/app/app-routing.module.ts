import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AthleteComponent } from './components/athlete/athlete.component';
import { AthletesComponent } from './components/athletes/athletes.component';
import { CompetitionsComponent } from './components/competitions/competitions.component';
import { GroupsComponent } from './components/groups/groups.component';
import { HomeComponent } from './components/home/home.component';
import { TrainingsComponent } from './components/trainings/trainings.component';


const routes: Routes = [
	{path: 'competitions', component:CompetitionsComponent},
	{path: 'athletes', component:AthletesComponent},
	{path: 'groups', component:GroupsComponent},
	{path: 'trainings', component:TrainingsComponent},
	{path: 'athlete/:id', component:AthleteComponent},
	{path: 'home', component:HomeComponent},
	{path: '', redirectTo:'/home', pathMatch: 'full'},
	{ path: '**', redirectTo:'/home' }

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
