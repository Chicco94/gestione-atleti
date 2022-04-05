import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Risultato } from 'src/app/allenamenti/models/risultato.model';

@Component({
  selector: 'app-anagrafica-risultato',
  templateUrl: './anagrafica-risultato.component.html',
  styleUrls: ['./anagrafica-risultato.component.scss']
})
export class AnagraficaRisultatoComponent implements OnInit {
	risultato:Risultato = new Risultato();

	constructor(
		public dialogRef: MatDialogRef<AnagraficaRisultatoComponent>,
		@Inject(MAT_DIALOG_DATA) public data: Risultato,
	) { }

	ngOnInit(): void {
		this.risultato = this.data;
	}
	
	onNoClick(): void {
		this.dialogRef.close();
	}
}
