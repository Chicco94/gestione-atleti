import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllenamentiComponent } from './allenamenti/allenamenti.component';
import { GestioneComponent } from './gestione/gestione.component';
import { HomeComponent } from './base/components/home/home.component';
import { AllenamentoComponent } from './allenamenti/components/allenamento/allenamento.component';
import { ListaAllenamentiComponent } from './allenamenti/components/lista-allenamenti/lista-allenamenti.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'allenamenti', component:AllenamentiComponent},
  {path: 'listaAllenamenti', component:ListaAllenamentiComponent},
  {path: 'allenamento', component:AllenamentoComponent},
  {path: 'gestione', component:GestioneComponent},
	{path: '', redirectTo:'/home', pathMatch: 'full'},
	{ path: '**', redirectTo:'/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
