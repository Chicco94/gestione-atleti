import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { DialogAthleteComponent } from 'src/app/dialog/dialog-athlete/dialog-athlete.component';
import { Athlete } from 'src/app/models/athlete.model';
import { CategoryEnum, SexEnum } from 'src/app/models/enumerations';
import { AthleteService } from 'src/app/services/athlete.service';
import { BaseComponent } from '../shared/base/base.component';

@Component({
	selector: 'app-athletes',
	templateUrl: './athletes.component.html',
	styleUrls: ['./athletes.component.css']
})
export class AthletesComponent extends BaseComponent {
	filteredAthletes:Athlete[];

	public filter_name:FormControl = new FormControl();
	public filter_sex:FormControl = new FormControl();
	public filter_category:FormControl = new FormControl();

	public sexEnum = SexEnum; // needed in html
	constructor(private athleteService:AthleteService,public dialog: MatDialog) {
		super();
		this.filteredAthletes = this.athleteService.list;
	}

	public applyFilter(){
		this.filteredAthletes = this.filteredAthletes.filter((athlete:Athlete):boolean => {
			// filtro in base al nome
			if (this.filter_name.value != null && !(this.filter_name.value.find((athleteName:string) => athleteName == athlete.fullName))) return false;
			// filtro in base al sesso
			if (this.filter_sex.value != null && !(this.filter_sex.value.find((athleteSex:SexEnum) => athleteSex == athlete.sex))) return false;
			// filtro in base alla categoria
			if (this.filter_category.value != null && !(this.filter_category.value.find((athleteCat:CategoryEnum) => athleteCat == athlete.category))) return false;
			return true;
		});
	}
	public clearFilter(){
		this.filteredAthletes = this.athleteService.list;
	}

	get filteredAthletesName():string[]{ return this.filteredAthletes.map((athlete:Athlete) => athlete.fullName).sort();}
	get filteredAthletesCategory():string[]{ return this.filteredAthletes.map((athlete:Athlete) => athlete.category).removeDups().sort();}

	public newAthlete(){
		const dialogRef = this.dialog.open(DialogAthleteComponent, {
			maxHeight: "80vh",
			minWidth: "95vw",
			panelClass: 'my-dialog-container',
			data: {athlete: new Athlete()}
		});

		dialogRef.afterClosed().subscribe(result => {
			if (result != undefined){
				this.athleteService.saveAndPush(result.athlete);
			}
		});
	}
}
