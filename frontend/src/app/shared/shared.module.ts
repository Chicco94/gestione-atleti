import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseModule } from '../base/base.module';
import { AtletaPreviewComponent } from './components/lista-atleti/atleta-preview/atleta-preview.component';
import { TestPreviewComponent } from './components/lista-test/test-preview/test-preview.component';
import { ListaAtletiComponent } from './components/lista-atleti/lista-atleti.component';
import { ListaTestComponent } from './components/lista-test/lista-test.component';
import { AnagraficaAtletaComponent } from './components/anagrafica-atleta/anagrafica-atleta.component';
import { AnagraficaTestComponent } from './components/anagrafica-test/anagrafica-test.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    AnagraficaAtletaComponent,
    AnagraficaTestComponent,
    AtletaPreviewComponent,
    TestPreviewComponent,
    ListaAtletiComponent,
    ListaTestComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BaseModule
  ],
  exports:[
    ListaTestComponent,
    ListaAtletiComponent,
    AtletaPreviewComponent,
  ]
})
export class SharedModule { }
