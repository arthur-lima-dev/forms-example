import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioSimplesComponent } from './pages/simple-form/formulario-simples.component';

const routes: Routes = [
  { path: 'fomulario-simples', component: FormularioSimplesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
