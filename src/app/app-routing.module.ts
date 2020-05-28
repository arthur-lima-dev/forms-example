import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormularioSimplesComponent} from './pages/simple-form/formulario-simples.component';
import {FormularioReativoComponent} from './pages/home/formulario-reativo.component';

const routes: Routes = [
  {path: '', redirectTo: '/formulario-reativo', pathMatch: 'full'},
  {path: 'formulario-reativo', component: FormularioReativoComponent},
  {path: 'fomulario-simples', component: FormularioSimplesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
