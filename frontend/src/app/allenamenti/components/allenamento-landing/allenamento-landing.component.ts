import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Allenamento } from '../../models/allenamento.model';
import { AllenamentoService } from '../../services/allenamento.service';

@Component({
  selector: 'app-allenamento-landing',
  templateUrl: './allenamento-landing.component.html',
  styleUrls: ['./allenamento-landing.component.scss']
})
export class AllenamentoLandingComponent implements OnInit {
  allenamento:Allenamento = new Allenamento();
  constructor(
    private route:ActivatedRoute,
    private allenamentoService:AllenamentoService
  ) {
    this.route.params.subscribe(params => {this.allenamento = this.allenamentoService.getAllenamento(params['id']);});
  }

  ngOnInit(): void {
  }
}