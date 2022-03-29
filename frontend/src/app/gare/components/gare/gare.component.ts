import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Gara } from 'src/app/gare/models/gara.model';
import { GaraService } from '../../services/gara.service';
import { BeforeGaraComponent } from '../before-gara/before-gara.component';

@Component({
	selector: 'app-gare',
	templateUrl: './gare.component.html',
	styleUrls: ['./gare.component.scss']
})
export class GareComponent implements OnInit {

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private garaService:GaraService,
		public dialog: MatDialog
		) { }

	ngOnInit(): void {
	}

	newGara(): void {
		const dialogRef = this.dialog.open(BeforeGaraComponent, {
			width: '250px',
			data: new Gara(),
		});

		dialogRef.afterClosed().subscribe(result => {
			if (result){
				result.is_gara = true;
				this.garaService.addGara(result);
				this.garaService.OnGetGara().subscribe((data:any) => {
					if (data != null && data['id'] > 0) this.router.navigate(['costruisci',data['id']],{ relativeTo: this.route });
				});
			}
		});
	}
}
