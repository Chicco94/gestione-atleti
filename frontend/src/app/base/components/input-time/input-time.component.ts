import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-input-time',
	templateUrl: './input-time.component.html',
	styleUrls: ['./input-time.component.scss']
})
export class InputTimeComponent implements OnInit {
	@Input() placeholder:string = "";
	@Input() model:number = 0;
	@Input() disabled:boolean = false;
	@Output() modelChange:EventEmitter<number> = new EventEmitter<number>();
	
	timer_started:boolean = false;
	timer_started_at: Date = new Date();


	constructor() { }

	ngOnInit(): void {
	}

	onModelChange(value: number) {
		this.modelChange.emit(value);
	}

	timer(){
		if (this.timer_started){
			this.timer_started = false;
			// trasformo il valore in secondi con 2 cifre decimali math.round(num*100)/100
			let time = Math.round((new Date().valueOf() - this.timer_started_at.valueOf())/10)/100;
			this.onModelChange(time);
		} else {
			this.timer_started = true;
			this.timer_started_at = new Date();
		}
	}
}
