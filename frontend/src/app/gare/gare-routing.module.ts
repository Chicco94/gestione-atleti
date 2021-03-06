import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnagraficaRisultatoComponent } from '../shared/components/anagrafica-risultato/anagrafica-risultato.component';
import { CostruisciComponent } from './components/costruisci/costruisci.component';
import { GaraLandingComponent } from './components/gara-landing/gara-landing.component';
import { GareLandingComponent } from './components/gare-landing/gare-landing.component';
import { GareComponent } from './components/gare/gare.component';
import { GareggiaComponent } from './components/gareggia/gareggia.component';
import { ListaGareLandingComponent } from './components/lista-gare-landing/lista-gare-landing.component';
import { ListaGareComponent } from './components/lista-gare/lista-gare.component';

const routes: Routes = [
	{path: 'gare', component:GareLandingComponent,
		children: [
			{path: '', component:GareComponent},
			{path: 'listaGare', component:ListaGareLandingComponent,
				children: [
					{path: '', component:ListaGareComponent},
					{path: ':idgara', component:GareggiaComponent},
				]
			},
			{path: 'costruisci', component:GaraLandingComponent,
				children: [
					{path: ':idgara/:idrisultato', component:AnagraficaRisultatoComponent},
					{path: ':idgara', component:CostruisciComponent},
				]
			},
		]
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class GareRoutingModule { }
