import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { BaseModule } from '../base/base.module';

import { AllenamentiComponent } from './allenamenti.component';
import { AllenamentoComponent } from './components/allenamento/allenamento.component';
import { AllenamentoAttivoComponent } from './components/allenamento-attivo/allenamento-attivo.component';
import { ListaAllenamentiComponent } from './components/lista-allenamenti/lista-allenamenti.component';
import { AllenamentoPreviewComponent } from './components/lista-allenamenti/allenamento-preview/allenamento-preview.component';
import { BeforeAllenamentoComponent } from './components/before-allenamento/before-allenamento.component';
import { AllenamentiLandingComponent } from './components/allenamenti-landing/allenamenti-landing.component';
import { AllenamentoLandingComponent } from './components/allenamento-landing/allenamento-landing.component';
import { ListaAllenamentiLandingComponent } from './components/lista-allenamenti-landing/lista-allenamenti-landing.component';
import { AllenamentoSelectTestComponent } from './components/allenamento-select-test/allenamento-select-test.component';
import { AllenamentoSelectAtletaComponent } from './components/allenamento-select-atleta/allenamento-select-atleta.component';
import { AllenamentiRoutingModule } from './allenamenti-routing.module';

@NgModule({
	declarations: [
		AllenamentiLandingComponent,
		AllenamentoLandingComponent,
		ListaAllenamentiLandingComponent,
		AllenamentiComponent,
		ListaAllenamentiComponent,
		AllenamentoComponent,
		AllenamentoSelectTestComponent,
		AllenamentoSelectAtletaComponent,
		AllenamentoAttivoComponent,
		AllenamentoPreviewComponent,
		BeforeAllenamentoComponent
	],
	imports: [
		AllenamentiRoutingModule,
		CommonModule,
		BaseModule
	],
	exports:[
	]
})
export class AllenamentiModule { }
