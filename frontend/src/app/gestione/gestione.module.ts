import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestioneComponent } from './gestione.component';
import { SharedModule } from '../shared/shared.module';
import { BaseModule } from '../base/base.module';



@NgModule({
  declarations: [
    GestioneComponent
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
