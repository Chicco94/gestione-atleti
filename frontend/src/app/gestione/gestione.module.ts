import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { BaseModule } from '../base/base.module';

import { GestioneComponent } from './gestione.component';
import { GestioneLandingComponent } from './components/gestione-landing/gestione-landing.component';
import { GestioneTestLandingComponent } from './components/gestione-test-landing/gestione-test-landing.component';
import { GestioneAtletiLandingComponent } from './components/gestione-atleti-landing/gestione-atleti-landing.component';
import { GestioneTestComponent } from './components/gestione-test/gestione-test.component';
import { GestioneAtletiComponent } from './components/gestione-atleti/gestione-atleti.component';



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
    CommonModule,
    BaseModule,
    SharedModule
  ],
  exports:[
    GestioneComponent
  ]
})
export class GestioneModule { }
