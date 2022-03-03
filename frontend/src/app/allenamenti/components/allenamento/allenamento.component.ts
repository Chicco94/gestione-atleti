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
    this.route.params.subscribe(params => {
      this.allenamentoService.getAllenamento(params['idallenamento']);
      this.allenamento.id = params['idallenamento'];
    });
  }

  ngOnInit(): void {
    this.allenamentoService.OnGetAllenamento().subscribe((data:any) => {
			if (data != null && data['id'] > 0) this.allenamento = new Allenamento().deserialize(data);
    });
  }
}
