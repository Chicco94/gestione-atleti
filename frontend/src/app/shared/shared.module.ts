import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AthleteComponent } from './components/athlete/athlete.component';
import { EnumToArrayPipe, FilterPipe } from '../utils/pipes/pipes';

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
import { AppRoutingModule } from '../app-routing.module';
import { BaseModule } from '../base/base.module';

@NgModule({
  declarations: [
    AthleteComponent,
    EnumToArrayPipe,
    FilterPipe
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BaseModule
  ],
  exports:[
    AthleteComponent
  ]
})
export class SharedModule { }
