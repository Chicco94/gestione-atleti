import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

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
import {DateAdapter, MatNativeDateModule, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';
import {AppRoutingModule} from '../app-routing.module';


// Components
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

import { InputTextComponent } from './components/input-text/input-text.component';
import { InputDateComponent } from './components/input-date/input-date.component';
import { InputNumberComponent } from './components/input-number/input-number.component';
import { InputSexComponent } from './components/input-sex/input-sex.component';
import { InputTimeComponent } from './components/input-time/input-time.component';
import { InputTestTypeComponent } from './components/input-test-type/input-test-type.component';


// Directives
import { BackButtonDirective } from './directives/backbutton.directive';


// Pipes
import { SearchPipe } from './pipes/search.pipe';
import { CustomDateAdapter } from './services/custom.date.adapter';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    InputTextComponent,
    InputDateComponent,
    InputNumberComponent,
    InputTimeComponent,
    InputSexComponent,
    InputTestTypeComponent,

    BackButtonDirective,
    
    SearchPipe
  ],
  imports: [
    CommonModule,
    AppRoutingModule,

    FlexLayoutModule,

    // Material
    MatToolbarModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
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
    FlexLayoutModule,

    // Material
    MatToolbarModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
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

    // Components
    InputTextComponent,
    InputDateComponent,
    InputNumberComponent,
    InputSexComponent,
    InputTimeComponent,
    InputTestTypeComponent,

    // Directives
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
