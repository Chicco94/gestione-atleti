import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Gara } from 'src/app/gare/models/gara.model';

@Component({
	selector: 'app-before-gara',
	templateUrl: './before-gara.component.html',
	styleUrls: ['./before-gara.component.scss']
})
export class BeforeGaraComponent implements OnInit {
	gara:Gara = new Gara();

	constructor(
		public dialogRef: MatDialogRef<BeforeGaraComponent>,
		@Inject(MAT_DIALOG_DATA) public data: Gara,
	) { }

	ngOnInit(): void {
		this.gara = this.data;
	}
	
	onNoClick(): void {
		this.dialogRef.close();
	}
}
