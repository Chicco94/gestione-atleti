import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GareRoutingModule } from './gare-routing.module';
import { GareLandingComponent } from './gare-landing/gare-landing.component';
import { GareComponent } from './gare/gare.component';
import { ListaGareComponent } from './lista-gare/lista-gare.component';
import { ListaGareLandingComponent } from './lista-gare-landing/lista-gare-landing.component';
import { CostruisciComponent } from './costruisci/costruisci.component';
import { GareggiaComponent } from './gareggia/gareggia.component';


@NgModule({
	declarations: [
		GareLandingComponent,
		GareComponent,
		ListaGareComponent,
		ListaGareLandingComponent,
		CostruisciComponent,
		GareggiaComponent
	],
	imports: [
		CommonModule,
		GareRoutingModule
	]
})
export class GareModule { }
