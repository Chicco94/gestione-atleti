import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AthletesComponent } from './components/athletes/athletes.component';
import { AthleteComponent } from './components/athlete/athlete.component';
import { AthletePreviewComponent } from './components/athletes/athlete-preview/athlete-preview.component';
import { AthleteCompetitionPreviewComponent } from './components/athlete/athlete-competition-preview/athlete-competition-preview.component';

import { MatButtonModule, MatCardModule, MatDatepickerModule, MatDialogModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatProgressSpinnerModule, MatSelectModule, MatSidenavModule, MatTabsModule, MatToolbarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ArrayUtilsModule } from './utils/array-utils/array-utils.module';
import { EnumToArrayPipe, FilterPipe } from './utils/pipes/pipes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogAthleteComponent } from './dialog/dialog-athlete/dialog-athlete.component';
import { AthleteInfoComponent } from './components/athlete/athlete-info/athlete-info.component';
import { TextFieldComponent } from './components/shared/text-field/text-field.component';
import { DateFieldComponent } from './components/shared/date-field/date-field.component';
import localeIt from '@angular/common/locales/it';
import { SexFieldComponent } from './components/shared/sex-field/sex-field.component';
import { SideFieldComponent } from './components/shared/side-field/side-field.component';
import { DialogCompetitionComponent } from './dialog/dialog-competition/dialog-competition.component';
import { CompetitionsComponent } from './components/competitions/competitions.component';
import { CompetitionFieldComponent } from './components/shared/competition-field/competition-field.component';
import { DialogAthleteCompetitionComponent } from './dialog/dialog-athlete-competition/dialog-athlete-competition.component';
import { CompetitionPreviewComponent } from './components/competitions/competition-preview/competition-preview.component';
import { AthleteFieldComponent } from './components/shared/athlete-field/athlete-field.component';
import { HttpClientModule } from '@angular/common/http';
import { AthleteInfoMobileComponent } from './components/athlete/athlete-info-mobile/athlete-info-mobile.component';
import { BaseComponent } from './components/shared/base/base.component';
import { CategoryFieldComponent } from './components/shared/category-field/category-field.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { SpecialityFieldComponent } from './components/shared/speciality-field/speciality-field.component';
import { GroupsComponent } from './components/groups/groups.component';
import { GroupPreviewComponent } from './components/groups/group-preview/group-preview.component';
import { DialogGroupComponent } from './dialog/dialog-group/dialog-group.component';
import { AthleteGroupPreviewComponent } from './components/athlete/athlete-group-preview/athlete-group-preview.component';
import { DialogAthleteGroupComponent } from './dialog/dialog-athlete-group/dialog-athlete-group.component';
import { TrainingsComponent } from './components/trainings/trainings.component';
import { TrainingPreviewComponent } from './components/trainings/training-preview/training-preview.component';
import { DialogTrainingComponent } from './dialog/dialog-training/dialog-training.component';

registerLocaleData(localeIt);

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		AthletesComponent,
		AthletePreviewComponent,
		AthleteComponent,
		AthleteInfoComponent,
		CompetitionsComponent,
		AthleteCompetitionPreviewComponent,

		FilterPipe,
		EnumToArrayPipe,
		
		TextFieldComponent,
		DateFieldComponent,
		SexFieldComponent,
		SideFieldComponent,
		CompetitionFieldComponent,
		
		DialogAthleteComponent,
		DialogCompetitionComponent,
		DialogAthleteCompetitionComponent,
		CompetitionPreviewComponent,
		AthleteFieldComponent,
		AthleteInfoMobileComponent,
		BaseComponent,
		CategoryFieldComponent,
		SpecialityFieldComponent,
		GroupsComponent,
		GroupPreviewComponent,
		DialogGroupComponent,
		AthleteGroupPreviewComponent,
		DialogAthleteGroupComponent,
		TrainingsComponent,
		TrainingPreviewComponent,
		DialogTrainingComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,

		HttpClientModule,

		AppRoutingModule,
		RouterModule,
		FormsModule,

		CommonModule,

		// Utils
		ArrayUtilsModule,

		// Material
		MatToolbarModule,
		MatCardModule,
		MatDialogModule,
		MatInputModule,
		MatSidenavModule,
		MatGridListModule,
		MatListModule,
		MatButtonModule,
		MatIconModule,
		MatFormFieldModule,
		ReactiveFormsModule ,
		MatInputModule,
		FlexLayoutModule,
		MatMenuModule,
		MatSelectModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatTabsModule,
		MatProgressSpinnerModule,
		ScrollingModule
	],
	providers: [
		{ provide: LOCALE_ID, useValue: 'it' }
	],
	bootstrap: [AppComponent],
	entryComponents: [
		DialogAthleteComponent,
		DialogCompetitionComponent,
		DialogGroupComponent,
		DialogAthleteCompetitionComponent,
		DialogTrainingComponent
	]
})
export class AppModule { }
