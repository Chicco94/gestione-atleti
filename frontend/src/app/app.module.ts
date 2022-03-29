import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// CUSTOM
import { GestioneModule } from './gestione/gestione.module';
import { AllenamentiModule } from './allenamenti/allenamenti.module';
import { SharedModule } from './shared/shared.module';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';

const config: SocketIoConfig = {
	url: environment.socketUrl, // socket server url;
	options: {}
}


@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,

		// Custom
		AllenamentiModule,
		GestioneModule,
		SharedModule,

		SocketIoModule.forRoot(config)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
