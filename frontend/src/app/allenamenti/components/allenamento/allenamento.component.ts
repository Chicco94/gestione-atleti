import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Allenamento } from '../../models/allenamento.model';
import { AllenamentoService } from '../../services/allenamento.service';

@Component({
  selector: 'app-allenamento',
  templateUrl: './allenamento.component.html',
  styleUrls: ['./allenamento.component.scss']
})
export class AllenamentoComponent implements OnInit {
  allenamento:Allenamento = new Allenamento();
  constructor(
    private route:ActivatedRoute,
    private allenamentoService:AllenamentoService
  ) {
    this.route.params.subscribe(params => {this.allenamentoService.getAllenamento(params['id']);});
  }

  ngOnInit(): void {
  }
}
