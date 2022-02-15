import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllenamentiComponent } from './allenamenti.component';
import { SharedModule } from '../shared/shared.module';
import { BaseModule } from '../base/base.module';
import { AllenamentoComponent } from './components/allenamento/allenamento.component';
import { AllenamentoAttivoComponent } from './components/allenamento-attivo/allenamento-attivo.component';
import { ListaAllenamentiComponent } from './components/lista-allenamenti/lista-allenamenti.component';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    AllenamentiComponent,
    ListaAllenamentiComponent,
    AllenamentoComponent,
    AllenamentoAttivoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BaseModule
  ],
  exports:[
  ]
})
export class AllenamentiModule { }
