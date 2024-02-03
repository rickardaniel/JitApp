import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { AceesoJiitComponent } from './aceeso-jiit/aceeso-jiit.component';
import { RecuperarPasswordComponent } from './recuperar-password/recuperar-password.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AceesoJiitComponent,
    RecuperarPasswordComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
