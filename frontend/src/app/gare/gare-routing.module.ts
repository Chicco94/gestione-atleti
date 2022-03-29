import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CostruisciComponent } from './components/costruisci/costruisci.component';
import { GareLandingComponent } from './components/gare-landing/gare-landing.component';
import { GareComponent } from './components/gare/gare.component';
import { GareggiaComponent } from './components/gareggia/gareggia.component';
import { ListaGareLandingComponent } from './components/lista-gare-landing/lista-gare-landing.component';
import { ListaGareComponent } from './components/lista-gare/lista-gare.component';

const routes: Routes = [
	{path: 'gare', component:GareLandingComponent,
		children: [
			{path: '', component:GareComponent},
			{path: 'listaAllenamenti', component:ListaGareLandingComponent,
				children: [
					{path: '', component:ListaGareComponent},
					{path: ':id', component:GareggiaComponent},
				]
			},
			{path: 'allenamento', component:CostruisciComponent },
		]
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class GareRoutingModule { }
