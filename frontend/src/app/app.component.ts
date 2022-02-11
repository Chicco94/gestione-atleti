import { Component, OnInit } from '@angular/core';
import { Training } from './models/training.model';
import { AthleteCompetitionService } from './services/athlete-competition.service';
import { AthleteService } from './services/athlete.service';
import { CompetitionService } from './services/competition.service';
import { GroupService } from './services/group.service';
import { TrainingService } from './services/trainings.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
	title = 'Gestione Atleti';

	public pages:menuPage[] = [
		{routerLink:"./home",			ariaLabel:"Home",		icon:"home",			disabled:()=>false}
		,{routerLink:"./athletes",		ariaLabel:"Alteti",		icon:"directions_run",	disabled:()=>!this.athleteService.download_completed || !this.athleteCompetitionService.download_completed}
		,{routerLink:"./competitions",	ariaLabel:"Gare",		icon:"emoji_events",	disabled:()=>!this.competitionService.download_completed}
		,{routerLink:"./groups",		ariaLabel:"Gruppi",		icon:"groups",			disabled:()=>!this.groupService.download_completed}
		,{routerLink:"./trainings",		ariaLabel:"Allenamenti",icon:"fitness_center",	disabled:()=>!this.trainingService.download_completed}
	];

	constructor(
		public athleteService:AthleteService,
		public competitionService:CompetitionService,
		public athleteCompetitionService:AthleteCompetitionService,
		public groupService:GroupService,
		public trainingService:TrainingService
	){}

	ngOnInit(){
		this.athleteService.find();
		this.athleteCompetitionService.find();
		this.competitionService.find();
		this.groupService.find();
		this.trainingService.find();
	}
}

export class menuPage{
	routerLink:string
	icon:string
	ariaLabel:string
	disabled:()=>boolean
}