import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CostruisciComponent } from './costruisci/costruisci.component';
import { GareLandingComponent } from './gare-landing/gare-landing.component';
import { GareComponent } from './gare/gare.component';
import { GareggiaComponent } from './gareggia/gareggia.component';
import { ListaGareLandingComponent } from './lista-gare-landing/lista-gare-landing.component';
import { ListaGareComponent } from './lista-gare/lista-gare.component';

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
