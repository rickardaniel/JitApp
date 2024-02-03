import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardDRoutingModule } from './dashboard-d-routing.module';
import { PanelComponent } from './panel/panel.component';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PruebasComponent } from './pruebas/pruebas.component';


@NgModule({
  declarations: [
    PanelComponent,
    PruebasComponent
  ],
  imports: [
    CommonModule,
    DashboardDRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class DashboardDModule { }
