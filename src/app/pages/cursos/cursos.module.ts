import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { TableroCursosComponent } from './tablero-cursos/tablero-cursos.component';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DocentesComponent } from './docentes/docentes.component';
import { HorariosComponent } from './horarios/horarios.component';


@NgModule({
  declarations: [
    TableroCursosComponent,
    DocentesComponent,
    HorariosComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    SharedModule,
    NgbModule
    // MDBBootstrapModule
    
  ]
})
export class CursosModule { }
