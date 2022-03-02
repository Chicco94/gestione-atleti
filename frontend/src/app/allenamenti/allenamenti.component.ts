import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { BeforeAllenamentoComponent } from './components/before-allenamento/before-allenamento.component';
import { Allenamento } from './models/allenamento.model';
import { AllenamentoService } from './services/allenamento.service';

@Component({
	selector: 'app-allenamenti',
	templateUrl: './allenamenti.component.html',
	styleUrls: ['./allenamenti.component.scss']
})
export class AllenamentiComponent implements OnInit {

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private allenamentoService:AllenamentoService,
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
				this.allenamentoService.addAllenamento(result);
				this.allenamentoService.OnGetAllenamento().subscribe((data:any) => {
					if (data != null && data['id'] > 0) this.router.navigate(['allenamento',data['id']],{ relativeTo: this.route });
				});
			}
		});
	}
}
