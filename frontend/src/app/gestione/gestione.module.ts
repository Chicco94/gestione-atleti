import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseModule } from '../base/base.module';

import { GestioneComponent } from './gestione.component';
import { GestioneLandingComponent } from './components/gestione-landing/gestione-landing.component';
import { GestioneTestLandingComponent } from './components/gestione-test-landing/gestione-test-landing.component';
import { GestioneAtletiLandingComponent } from './components/gestione-atleti-landing/gestione-atleti-landing.component';
import { GestioneTestComponent } from './components/gestione-test/gestione-test.component';
import { GestioneAtletiComponent } from './components/gestione-atleti/gestione-atleti.component';
import { GestioneRoutingModule } from './gestione-routing.module';



@NgModule({
	declarations: [
		GestioneComponent,
		GestioneLandingComponent,
		GestioneTestLandingComponent,
		GestioneTestComponent,
		GestioneAtletiLandingComponent,
		GestioneAtletiComponent
	],
	imports: [
		GestioneRoutingModule,
		CommonModule,
		BaseModule,
	],
	exports:[
		GestioneComponent
	]
})
export class GestioneModule { }
