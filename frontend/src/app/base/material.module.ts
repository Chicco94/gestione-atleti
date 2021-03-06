import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// MATERIAL
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatNativeDateModule, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
	declarations: [],
	imports: [
		CommonModule,

		// Material
		MatToolbarModule,
		MatCardModule,
		MatDialogModule,
		MatInputModule,
		MatGridListModule,
		MatSlideToggleModule,
		MatListModule,
		MatButtonModule,
		MatIconModule,
		MatFormFieldModule,
		MatMenuModule,
		MatSelectModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatTabsModule,
		MatProgressSpinnerModule,
		ScrollingModule,
		MatCheckboxModule,
		MatTableModule,
		MatDividerModule,
	],
	exports:[

		// Material
		MatToolbarModule,
		MatCardModule,
		MatDialogModule,
		MatInputModule,
		MatGridListModule,
		MatSlideToggleModule,
		MatListModule,
		MatButtonModule,
		MatIconModule,
		MatFormFieldModule,
		MatMenuModule,
		MatSelectModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatTabsModule,
		MatProgressSpinnerModule,
		ScrollingModule,
		MatCheckboxModule,
		MatTableModule,
		MatDividerModule,
	],
	providers: [
		{ provide: MAT_DATE_LOCALE, useValue: 'it-IT' }
	]
})
export class MaterialModule { }
