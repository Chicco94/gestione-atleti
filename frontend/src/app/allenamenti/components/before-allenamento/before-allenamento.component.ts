import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Allenamento } from '../../models/allenamento.model';

@Component({
	selector: 'app-before-allenamento',
	templateUrl: './before-allenamento.component.html',
	styleUrls: ['./before-allenamento.component.scss']
})
export class BeforeAllenamentoComponent implements OnInit {
	allenamento:Allenamento = new Allenamento();

	constructor(
		public dialogRef: MatDialogRef<BeforeAllenamentoComponent>,
		@Inject(MAT_DIALOG_DATA) public data: Allenamento,
	) { }

	ngOnInit(): void {
		this.allenamento = this.data;
	}
	
	onNoClick(): void {
		this.dialogRef.close();
	}
}
