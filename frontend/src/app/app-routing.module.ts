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
import { GestioneLandingComponent } from './gestione/components/gestione-landing/gestione-landing.component';
import { GestioneTestLandingComponent } from './gestione/components/gestione-test-landing/gestione-test-landing.component';
import { GestioneAtletiLandingComponent } from './gestione/components/gestione-atleti-landing/gestione-atleti-landing.component';
import { LoginComponent } from './base/components/login/login.component';
import { LoginGuard } from './base/guards/login.guard';
import { AllenamentoSelectTestComponent } from './allenamenti/components/allenamento-select-test/allenamento-select-test.component';
import { GestioneTestComponent } from './gestione/components/gestione-test/gestione-test.component';
import { GestioneAtletiComponent } from './gestione/components/gestione-atleti/gestione-atleti.component';
import { AllenamentoSelectAtletaComponent } from './allenamenti/components/allenamento-select-atleta/allenamento-select-atleta.component';

const routes: Routes = [
	{path: 'home', component:HomeComponent, canActivate: [LoginGuard]},
    { path: 'login', component: LoginComponent },


	{	// ALLENA
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
				path: 'allenamento', 
				component:AllenamentoLandingComponent,
				children: [
					{path: ':idallenamento', component:AllenamentoComponent},
					{path: 'listaAtleti/:idallenamento', component:AllenamentoSelectAtletaComponent},
					{path: 'listaTest/:idallenamento', component:AllenamentoSelectTestComponent},
				]
			},
		]
	},

	{	// GESTIONE
		path: 'gestione', 
		component:GestioneLandingComponent,
		children: [
			{path: '', component:GestioneComponent},
			{
				path: 'gestioneAtleti', 
				component:GestioneAtletiLandingComponent,
				children: [
					{path: '', component:GestioneAtletiComponent},
					{path: ':id', component:AnagraficaAtletaComponent},
				]
			},
			{
				path: 'gestioneTest', 
				component:GestioneTestLandingComponent,
				children: [
					{path: '', component:GestioneTestComponent},
					{path: ':id', component:AnagraficaTestComponent},
				]
			},

		]
	},

	// WILDCARDS
	{path: '', redirectTo:'/home', pathMatch: 'full'},
	{path: '**', redirectTo:'/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
