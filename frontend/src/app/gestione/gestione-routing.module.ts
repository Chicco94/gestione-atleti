import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnagraficaAtletaComponent } from '../shared/components/anagrafica-atleta/anagrafica-atleta.component';
import { AnagraficaTestComponent } from '../shared/components/anagrafica-test/anagrafica-test.component';
import { GestioneAtletiLandingComponent } from './components/gestione-atleti-landing/gestione-atleti-landing.component';
import { GestioneAtletiComponent } from './components/gestione-atleti/gestione-atleti.component';
import { GestioneLandingComponent } from './components/gestione-landing/gestione-landing.component';
import { GestioneTestLandingComponent } from './components/gestione-test-landing/gestione-test-landing.component';
import { GestioneTestComponent } from './components/gestione-test/gestione-test.component';
import { GestioneComponent } from './gestione.component';

const gestioneRoutes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forChild(gestioneRoutes)],
  exports: [RouterModule]
})
export class GestioneRoutingModule { }
