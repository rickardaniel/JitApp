import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocentesComponent } from './docentes/docentes.component';
import { HorariosComponent } from './horarios/horarios.component';
import { TableroCursosComponent } from './tablero-cursos/tablero-cursos.component';

const routes: Routes = [
  {
    path:'tablero_cursos', component:TableroCursosComponent
  },
  {
    path:'docentes', component:DocentesComponent
  },
  {
    path:'horarios', component:HorariosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
