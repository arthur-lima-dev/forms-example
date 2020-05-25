import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleFormComponent } from './pages/simple-form/simple-form.component';

const routes: Routes = [
  { path: 'fomulario-simples', component: SimpleFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
