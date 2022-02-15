import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { BaseModule } from '../base/base.module';

import { AllenamentiComponent } from './allenamenti.component';
import { AllenamentoComponent } from './components/allenamento/allenamento.component';
import { AllenamentoAttivoComponent } from './components/allenamento-attivo/allenamento-attivo.component';
import { ListaAllenamentiComponent } from './components/lista-allenamenti/lista-allenamenti.component';
import { AllenamentoPreviewComponent } from './components/allenamento-preview/allenamento-preview.component';

@NgModule({
  declarations: [
    AllenamentiComponent,
    ListaAllenamentiComponent,
    AllenamentoComponent,
    AllenamentoAttivoComponent,
    AllenamentoPreviewComponent
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
