import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './guards/login.guard';

const appRoutes: Routes = [
	{path: 'home', component:HomeComponent, canActivate: [LoginGuard]},
    { path: 'login', component: LoginComponent },
    { path: 'allena', loadChildren:()=>import('../allenamenti/allenamenti.module').then(m=>m.AllenamentiModule) },
    { path: 'gestione', loadChildren:()=>import('../gestione/gestione.module').then(m=>m.GestioneModule) },

	// WILDCARDS
	{path: '', redirectTo:'/home', pathMatch: 'full'},
	{path: '**', redirectTo:'/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
