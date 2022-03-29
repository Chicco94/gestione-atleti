import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GareRoutingModule } from './gare-routing.module';
import { BaseModule } from '../base/base.module';
import { GareLandingComponent } from './components/gare-landing/gare-landing.component';
import { GareComponent } from './components/gare/gare.component';
import { ListaGareComponent } from './components/lista-gare/lista-gare.component';
import { ListaGareLandingComponent } from './components/lista-gare-landing/lista-gare-landing.component';
import { CostruisciComponent } from './components/costruisci/costruisci.component';
import { GareggiaComponent } from './components/gareggia/gareggia.component';


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
		GareRoutingModule,
		BaseModule
	]
})
export class GareModule { }
