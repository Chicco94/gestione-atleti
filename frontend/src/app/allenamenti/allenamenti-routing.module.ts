import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllenamentiComponent } from './allenamenti.component';
import { AllenamentiLandingComponent } from './components/allenamenti-landing/allenamenti-landing.component';
import { AllenamentoAttivoComponent } from './components/allenamento-attivo/allenamento-attivo.component';
import { AllenamentoLandingComponent } from './components/allenamento-landing/allenamento-landing.component';
import { AllenamentoSelectAtletaComponent } from './components/allenamento-select-atleta/allenamento-select-atleta.component';
import { AllenamentoSelectTestComponent } from './components/allenamento-select-test/allenamento-select-test.component';
import { AllenamentoComponent } from './components/allenamento/allenamento.component';
import { ListaAllenamentiLandingComponent } from './components/lista-allenamenti-landing/lista-allenamenti-landing.component';
import { ListaAllenamentiComponent } from './components/lista-allenamenti/lista-allenamenti.component';

const allenamentiRoutes: Routes = [
	{path: 'allena', component:AllenamentiLandingComponent,
		children: [
			{path: '', component:AllenamentiComponent},
			{path: 'listaAllenamenti', component:ListaAllenamentiLandingComponent,
				children: [
					{path: '', component:ListaAllenamentiComponent},
					{path: ':id', component:AllenamentoAttivoComponent},
				]
			},
			{path: 'allenamento', component:AllenamentoLandingComponent,
				children: [
					{path: ':idallenamento', component:AllenamentoComponent},
					{path: 'listaAtleti/:idallenamento', component:AllenamentoSelectAtletaComponent},
					{path: 'listaTest/:idallenamento', component:AllenamentoSelectTestComponent},
				]
			},
		]
	},
];

@NgModule({
  imports: [RouterModule.forChild(allenamentiRoutes)],
  exports: [RouterModule]
})
export class AllenamentiRoutingModule { }
