import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// CUSTOM
import { BaseModule } from './base/base.module';
import { GestioneModule } from './gestione/gestione.module';
import { AllenamentiModule } from './allenamenti/allenamenti.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,

    // Custom
    BaseModule,
    SharedModule,
    AllenamentiModule,
    GestioneModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
