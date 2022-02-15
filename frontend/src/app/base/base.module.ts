import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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

import { AppRoutingModule } from '../app-routing.module';

import { FlexLayoutModule } from '@angular/flex-layout';

import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent
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
    MatTabsModule,
    MatProgressSpinnerModule,
    ScrollingModule,
    MatCheckboxModule,
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
    MatTabsModule,
    MatProgressSpinnerModule,
    ScrollingModule,
    MatCheckboxModule,
  ]
})
export class BaseModule { }
