import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { BeforeAllenamentoComponent } from './components/before-allenamento/before-allenamento.component';
import { Allenamento } from './models/allenamento.model';

@Component({
	selector: 'app-allenamenti',
	templateUrl: './allenamenti.component.html',
	styleUrls: ['./allenamenti.component.scss']
})
export class AllenamentiComponent implements OnInit {

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		public dialog: MatDialog
		) { }

	ngOnInit(): void {
	}

	newAllenamento(): void {
		const dialogRef = this.dialog.open(BeforeAllenamentoComponent, {
			width: '250px',
			data: new Allenamento(),
		});

		dialogRef.afterClosed().subscribe(result => {
			if (result){
				result.id = 0
				this.router.navigate(['allenamento',result.id]);
			}
		});
	}

}
