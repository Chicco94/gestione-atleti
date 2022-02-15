import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AthleteComponent } from './components/athlete/athlete.component';
import { EnumToArrayPipe, FilterPipe, SearchPipe } from './pipes/pipes';

import { BaseModule } from '../base/base.module';
import { AtletaPreviewComponent } from './components/atleta-preview/atleta-preview.component';
import { TestPreviewComponent } from './components/test-preview/test-preview.component';
import { ListaAtletiComponent } from './components/lista-atleti/lista-atleti.component';
import { ListaTestComponent } from './components/lista-test/lista-test.component';

@NgModule({
  declarations: [
    AthleteComponent,
    AtletaPreviewComponent,
    TestPreviewComponent,
    ListaAtletiComponent,
    ListaTestComponent,
    EnumToArrayPipe,
    FilterPipe,
    SearchPipe
  ],
  imports: [
    CommonModule,
    BaseModule
  ],
  exports:[
  ]
})
export class SharedModule { }
