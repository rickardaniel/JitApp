import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocentesComponent } from '../cursos/docentes/docentes.component';
import { PanelComponent } from './panel/panel.component';
import { PruebasComponent } from './pruebas/pruebas.component';

const routes: Routes = [
  {
    path:'docente', component:PanelComponent
  },
  {
    path:'pruebas', component: PruebasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardDRoutingModule { }
