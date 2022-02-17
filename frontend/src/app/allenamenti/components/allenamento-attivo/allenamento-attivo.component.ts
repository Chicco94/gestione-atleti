import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Athlete } from 'src/app/shared/models/athlete.model';
import { Allenamento } from '../../models/allenamento.model';
import { Risultato } from '../../models/risultato.model';
import { Test } from '../../models/test.model';
import { AllenamentoService } from '../../services/allenamento.service';

@Component({
  selector: 'app-allenamento-attivo',
  templateUrl: './allenamento-attivo.component.html',
  styleUrls: ['./allenamento-attivo.component.scss']
})
export class AllenamentoAttivoComponent implements OnInit {
  allenamento:Allenamento = new Allenamento();
  columns:TableColumn[] = [];
  dataSource:any[] = [];
  displayedColumns:string[] = [];
  
  constructor(
    private route:ActivatedRoute,
    private allenamentoService:AllenamentoService
  ) {
    this.route.params.subscribe(params => {this.allenamento = this.allenamentoService.getAllenamento(params['id']);});
  }

  ngOnInit(): void {
    this.dataSource = this.prepareTableDataSource(this.allenamento);
    this.columns = this.prepareTableColumns(this.dataSource)
    this.displayedColumns = this.columns.map(c => c.columnDef);
  }

  /**
   * @author Enrico
   * @description trasforma un allenamento in un datasource per una tabella
   * @param allenamento allenamento da cui recuperare i risultati
   */
  prepareTableDataSource(allenamento:Allenamento){
    let a1 = new Athlete();
		a1.name = "Enrico";
		a1.surname = "Cominato";
		let a2 = new Athlete();
		a2.name = "Eleonora";
		a2.surname = "Barcaro";
		let a3 = new Athlete();
		a3.name = "Matteo";
		a3.surname = "Grigolato";
		let a4 = new Athlete();
		a4.name = "Elisabetta";
		a4.surname = "Greggio";
		let a5 = new Athlete();
		a5.name = "Elena";
		a5.surname = "Crepaldi";
		let a6 = new Athlete();
		a6.name = "Miracle";
		a6.surname = "Aighimien";

    return [
      {atleta:a1.fullName,result_1:4        ,result_2:undefined,result_3:undefined},
      {atleta:a2.fullName,result_1:undefined,result_2:undefined,result_3:undefined},
      {atleta:a3.fullName,result_1:undefined,result_2:undefined,result_3:undefined},
      {atleta:a4.fullName,result_1:undefined,result_2:undefined,result_3:undefined},
      {atleta:a5.fullName,result_1:undefined,result_2:undefined,result_3:undefined},
      {atleta:a6.fullName,result_1:undefined,result_2:undefined,result_3:undefined},
    ]
  }

  prepareTableColumns(datasource:any):TableColumn[]{
    return [
      {
        columnDef: 'atleta',
        header: "Atleta",
        sticky: true,
        key: 'atleta',
        type: ColumnTypeEnum.plain,
        cell: (d_row) => `${d_row.atleta}`,
      },
      {
        columnDef: 'test_1',
        header: "30 metri",
        sticky: false,
        key: 'result_1',
        type: ColumnTypeEnum.number,
        cell: (d_row) => `${d_row.result_1}`,
      },
      {
        columnDef: 'test_2',
        header: "40 metri",
        sticky: false,
        key: 'result_2',
        type: ColumnTypeEnum.number,
        cell: (d_row) => `${d_row.result_2}`,
      },
      {
        columnDef: 'test_3',
        header: "50 metri",
        sticky: false,
        key: 'result_3',
        type: ColumnTypeEnum.number,
        cell: (d_row) => `${d_row.result_3}`,
      },
    ]
  }
}

export interface TableColumn {
  columnDef: string;
  header: string;
  sticky?: boolean;
  key: string;
  type: ColumnTypeEnum
  cell: (model:any)=>string;
}

export enum ColumnTypeEnum{
  plain="plain",
  number="number",
  text="text",
  time="time"
} 