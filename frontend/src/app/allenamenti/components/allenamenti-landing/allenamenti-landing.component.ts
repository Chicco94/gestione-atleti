import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Allenamento } from '../../models/allenamento.model';
import { BeforeAllenamentoComponent } from '../before-allenamento/before-allenamento.component';

@Component({
  selector: 'app-allenamenti-landing',
  templateUrl: './allenamenti-landing.component.html',
  styleUrls: ['./allenamenti-landing.component.scss']
})
export class AllenamentiLandingComponent implements OnInit {

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
				this.router.navigate(['allenamento',result.id],{ relativeTo: this.route });
			}
		});
	}
}
