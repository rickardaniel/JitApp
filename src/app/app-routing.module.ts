import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'login', loadChildren:()=>import('./pages/login/login.module').then(m=>m.LoginModule)
  },

  {
    path:'', redirectTo:'login/acceso', pathMatch:'full'
  },
  {
    path:'cursos', loadChildren:()=>import('./pages/cursos/cursos.module').then(m=>m.CursosModule)
  },
  {
    path:'dashboard', loadChildren:()=>import('./pages/dashboard-d/dashboard-d.module').then(m=>m.DashboardDModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
