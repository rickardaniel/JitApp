import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AceesoJiitComponent } from './aceeso-jiit/aceeso-jiit.component';

const routes: Routes = [
  {
    path:'acceso', component:AceesoJiitComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
