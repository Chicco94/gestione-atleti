import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Training } from 'src/app/models/training.model';
import { AthleteService } from 'src/app/services/athlete.service';

@Component({
  selector: 'app-dialog-training',
  templateUrl: './dialog-training.component.html',
  styleUrls: ['./dialog-training.component.css']
})
export class DialogTrainingComponent implements OnInit {
  idathleteToAdd:string;

	constructor(
    private athleteService:AthleteService,
		public dialogRef: MatDialogRef<DialogTrainingComponent>,
		@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

	ngOnInit() {
	}

  public addAthleteToTraining(){
    this.data.training.idathletes.push(this.idathleteToAdd);
  }

  public removeAthleteToTraining(idathleteToRemove:string){
    this.data.training.idathletes.splice(this.data.training.idathletes.indexOf(idathleteToRemove));
  }

  public getAthlete(idathlete:string){
    let athlete = this.athleteService.getAthlete(idathlete);
    return athlete
  }
	
	close(): void {
		this.dialogRef.close();
	}
}

export interface DialogData {
	training: Training
}