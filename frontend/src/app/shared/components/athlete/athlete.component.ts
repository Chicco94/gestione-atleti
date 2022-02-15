import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SexEnum } from 'src/app/base/models/enumerations';
import { Athlete } from 'src/app/shared/models/athlete.model';
import { AthleteService } from '../../services/athlete.service';

@Component({
  selector: 'app-athlete',
  templateUrl: './athlete.component.html',
  styleUrls: ['./athlete.component.scss']
})
export class AthleteComponent {
	athlete:Athlete = new Athlete();
	disabled:boolean = false;
	
	sexEnum = SexEnum;
	
	constructor(
		private route:ActivatedRoute,
		public athleteService:AthleteService) {
			this.route.params.subscribe(params => {this.athlete = this.athleteService.getAthlete(params['id']);});
	}

	onAthleteChange(){
	}
}
