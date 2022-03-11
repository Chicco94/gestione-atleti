import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

// MATERIAL
import {MatToolbarModule} from '@angular/material/toolbar';
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
import { InputTextComponent } from './components/input-text/input-text.component';
import { InputDateComponent } from './components/input-date/input-date.component';
import { InputNumberComponent } from './components/input-number/input-number.component';
import { InputSideComponent } from './components/input-side/input-side.component';


// Directives
import { BackButtonDirective } from './directives/backbutton.directive';


// Pipes
import { SearchPipe } from './pipes/search.pipe';
import { EnumToArrayPipe } from './pipes/enum-to-array.pipe';
import { CustomDateAdapter } from './services/custom.date.adapter';
import { InputSexComponent } from './components/input-sex/input-sex.component';
import { InputTimeComponent } from './components/input-time/input-time.component';
import { InputTestTypeComponent } from './components/input-test-type/input-test-type.component';


@NgModule({
  declarations: [
    HomeComponent,
    InputTextComponent,
    InputDateComponent,
    InputNumberComponent,
    InputTimeComponent,
    InputSideComponent,
    InputSexComponent,
    InputTestTypeComponent,
    BackButtonDirective,
    SearchPipe,
    EnumToArrayPipe
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
    AppRoutingModule,

    FlexLayoutModule,

    // Material
    MatToolbarModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatGridListModule,
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
    InputSideComponent,
    InputSexComponent,
    InputTimeComponent,
    InputTestTypeComponent,

    // Directives
    BackButtonDirective,

    // Pipes
    SearchPipe,
    EnumToArrayPipe
  ],
  providers: [
    { provide: DateAdapter, useClass: CustomDateAdapter },
    { provide: MAT_DATE_LOCALE, useValue: 'it-IT' }
  ]
})
export class BaseModule { }
