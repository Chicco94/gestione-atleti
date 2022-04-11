import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';


// Components
import { InputTextComponent } from './components/input-text/input-text.component';
import { InputDateComponent } from './components/input-date/input-date.component';
import { InputNumberComponent } from './components/input-number/input-number.component';
import { InputSexComponent } from './components/input-sex/input-sex.component';
import { InputTimeComponent } from './components/input-time/input-time.component';
import { InputTestTypeComponent } from './components/input-test-type/input-test-type.component';
import { AtletaPreviewComponent } from './components/atleta-preview/atleta-preview.component';
import { ListaAtletiComponent } from './components/lista-atleti/lista-atleti.component';
import { ListaTestComponent } from './components/lista-test/lista-test.component';
import { TestPreviewComponent } from './components/test-preview/test-preview.component';
import { RisultatoPreviewComponent } from './components/risultato-preview/risultato-preview.component';
import { ListaRisultatiComponent } from './components/lista-risultati/lista-risultati.component';


// Pipes
import { SearchPipe } from './pipes/search.pipe';


// Directives
import { BackButtonDirective } from './directives/backbutton.directive';


// Material
import { MaterialModule } from './material.module';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { CustomDateAdapter } from './services/custom.date.adapter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
	declarations: [
		InputTextComponent,
		InputDateComponent,
		InputNumberComponent,
		InputTimeComponent,
		InputSexComponent,
		InputTestTypeComponent,

		AtletaPreviewComponent,
		ListaAtletiComponent,
		TestPreviewComponent,
		ListaTestComponent,
		RisultatoPreviewComponent,
		ListaRisultatiComponent,

		BackButtonDirective,
		
		SearchPipe,
	],
	imports: [
		CommonModule,

		FlexLayoutModule,

		FormsModule,

		MaterialModule,
		
		BrowserAnimationsModule
	],
	exports:[
		FlexLayoutModule,

		FormsModule,

		MaterialModule,

		BrowserAnimationsModule,

		// Components
		InputTextComponent,
		InputDateComponent,
		InputNumberComponent,
		InputSexComponent,
		InputTimeComponent,
		InputTestTypeComponent,

		AtletaPreviewComponent,
		ListaAtletiComponent,
		TestPreviewComponent,
		ListaTestComponent,
		RisultatoPreviewComponent,
		ListaRisultatiComponent,

		BackButtonDirective,
		
		// Pipes
		SearchPipe
	],
	providers: [
		{ provide: DateAdapter, useClass: CustomDateAdapter },
		{ provide: MAT_DATE_LOCALE, useValue: 'it-IT' }
	]
})
export class BaseModule { }
