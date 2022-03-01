import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllenamentiComponent } from './allenamenti/allenamenti.component';
import { GestioneComponent } from './gestione/gestione.component';
import { HomeComponent } from './base/components/home/home.component';
import { AllenamentoComponent } from './allenamenti/components/allenamento/allenamento.component';
import { ListaAllenamentiComponent } from './allenamenti/components/lista-allenamenti/lista-allenamenti.component';
import { ListaAtletiComponent } from './shared/components/lista-atleti/lista-atleti.component';
import { ListaTestComponent } from './shared/components/lista-test/lista-test.component';
import { AllenamentoAttivoComponent } from './allenamenti/components/allenamento-attivo/allenamento-attivo.component';
import { AnagraficaAtletaComponent } from './shared/components/anagrafica-atleta/anagrafica-atleta.component';
import { AnagraficaTestComponent } from './shared/components/anagrafica-test/anagrafica-test.component';
import { AllenamentiLandingComponent } from './allenamenti/components/allenamenti-landing/allenamenti-landing.component';
import { AllenamentoLandingComponent } from './allenamenti/components/allenamento-landing/allenamento-landing.component';
import { ListaAllenamentiLandingComponent } from './allenamenti/components/lista-allenamenti-landing/lista-allenamenti-landing.component';

const routes: Routes = [
	{path: 'home', component:HomeComponent},

	{
		path: 'allena', 
		component:AllenamentiLandingComponent,
		children: [
			{path: '', component:AllenamentiComponent},
			{
				path: 'listaAllenamenti', 
				component:ListaAllenamentiLandingComponent,
				children: [
					{path: '', component:ListaAllenamentiComponent},
					{path: ':id', component:AllenamentoAttivoComponent},
				]
			},
			{
				path: 'allenamento/:idallenamento', 
				component:AllenamentoLandingComponent,
				children: [
					{path: '', component:AllenamentoComponent},
					{path: 'listaAtleti/:selectable', component:ListaAtletiComponent},
					{path: 'listaTest/:selectable', component:ListaTestComponent},
				]
			},
		]
	},

	{path: 'gestione', component:GestioneComponent},
	{path: 'listaAtleti/:editable', component:ListaAtletiComponent},
	{path: 'listaTest/:editable', component:ListaTestComponent},
	{path: 'Atleta/:id', component:AnagraficaAtletaComponent},
	{path: 'Test', component:AnagraficaTestComponent},
	{path: '', redirectTo:'/home', pathMatch: 'full'},
	{path: '**', redirectTo:'/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
