import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Atleta } from 'src/app/shared/models/atleta.model';
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
    let a1 = new Atleta();
		a1.nome = "Enrico";
		a1.cognome = "Cominato";
		let a2 = new Atleta();
		a2.nome = "Eleonora";
		a2.cognome = "Barcaro";
		let a3 = new Atleta();
		a3.nome = "Matteo";
		a3.cognome = "Grigolato";
		let a4 = new Atleta();
		a4.nome = "Elisabetta";
		a4.cognome = "Greggio";
		let a5 = new Atleta();
		a5.nome = "Elena";
		a5.cognome = "Crepaldi";
		let a6 = new Atleta();
		a6.nome = "Miracle";
		a6.cognome = "Aighimien";

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