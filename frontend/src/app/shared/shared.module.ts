import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseModule } from '../base/base.module';
import { AnagraficaAtletaComponent } from './components/anagrafica-atleta/anagrafica-atleta.component';
import { AnagraficaTestComponent } from './components/anagrafica-test/anagrafica-test.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
	declarations: [
		HomeComponent,
		LoginComponent,
		AnagraficaAtletaComponent,
		AnagraficaTestComponent,

	],
	imports: [
		CommonModule,
		AppRoutingModule,
		BaseModule
	],
	exports:[
		BaseModule,
		AppRoutingModule,
	]
})
export class SharedModule { }
