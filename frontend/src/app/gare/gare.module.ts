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
import { BeforeGaraComponent } from './components/before-gara/before-gara.component';
import { GaraPreviewComponent } from './components/gara-preview/gara-preview.component';
import { GaraLandingComponent } from './components/gara-landing/gara-landing.component';


@NgModule({
	declarations: [
		GareLandingComponent,
		GareComponent,
		ListaGareComponent,
		ListaGareLandingComponent,
		CostruisciComponent,
		GareggiaComponent,
		BeforeGaraComponent,
		GaraPreviewComponent,
		GaraLandingComponent
	],
	imports: [
		GareRoutingModule,
		CommonModule,
		BaseModule
	]
})
export class GareModule { }
