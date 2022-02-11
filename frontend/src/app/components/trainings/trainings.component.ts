import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogTrainingComponent } from 'src/app/dialog/dialog-training/dialog-training.component';
import { Training } from 'src/app/models/training.model';
import { TrainingService } from 'src/app/services/trainings.service';
import { BaseComponent } from '../shared/base/base.component';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent extends BaseComponent {

	filteredTrainings:Training[];

	constructor(private trainingService:TrainingService,public dialog: MatDialog) {
    super();
		this.filteredTrainings = this.trainingService.list;
	}

	public openTraining(training){

		const dialogRef = this.dialog.open(DialogTrainingComponent, {
			maxHeight: "80vh",
			minWidth: "95vw",
			panelClass: 'my-dialog-container',
			data: {training: training ? training : new Training()}
		});

		dialogRef.afterClosed().subscribe(result => {
			if (result!=undefined){
				this.trainingService.saveAndPush(result.training);
			}
		});
	}

}
