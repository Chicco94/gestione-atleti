import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestioneComponent } from './gestione/gestione.component';
import { HomeComponent } from './base/components/home/home.component';
import { AnagraficaTestComponent } from './shared/components/anagrafica-test/anagrafica-test.component';
import { GestioneLandingComponent } from './gestione/components/gestione-landing/gestione-landing.component';
import { GestioneTestLandingComponent } from './gestione/components/gestione-test-landing/gestione-test-landing.component';
import { GestioneAtletiLandingComponent } from './gestione/components/gestione-atleti-landing/gestione-atleti-landing.component';
import { LoginComponent } from './base/components/login/login.component';
import { LoginGuard } from './base/guards/login.guard';
import { GestioneTestComponent } from './gestione/components/gestione-test/gestione-test.component';
import { GestioneAtletiComponent } from './gestione/components/gestione-atleti/gestione-atleti.component';
import { AnagraficaAtletaComponent } from './shared/components/anagrafica-atleta/anagrafica-atleta.component';

const appRoutes: Routes = [
	{path: 'home', component:HomeComponent, canActivate: [LoginGuard]},
    { path: 'login', component: LoginComponent },

	{	// GESTIONE
		path: 'gestione', 
		component:GestioneLandingComponent,
		children: [
			{path: '', component:GestioneComponent},
			{
				path: 'gestioneAtleti', 
				component:GestioneAtletiLandingComponent,
				children: [
					{path: '', component:GestioneAtletiComponent},
					{path: ':id', component:AnagraficaAtletaComponent},
				]
			},
			{
				path: 'gestioneTest', 
				component:GestioneTestLandingComponent,
				children: [
					{path: '', component:GestioneTestComponent},
					{path: ':id', component:AnagraficaTestComponent},
				]
			},

		]
	},

	// WILDCARDS
	{path: '', redirectTo:'/home', pathMatch: 'full'},
	{path: '**', redirectTo:'/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
