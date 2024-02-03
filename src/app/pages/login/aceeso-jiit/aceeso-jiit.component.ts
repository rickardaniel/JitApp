import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-aceeso-jiit',
  templateUrl: './aceeso-jiit.component.html',
  styleUrls: ['./aceeso-jiit.component.scss']
})
export class AceesoJiitComponent implements OnInit {

  banderaAcceso:any;
  banderaBtnAcceso=true;
  banderaAcceso1:any;
  banderaBtnAcceso1=true;
  constructor(
    private route: Router,
  ) { }

  ngOnInit(): void {
  }

 mostrarInputAcceso(){
   this.banderaAcceso=true;
   this.banderaBtnAcceso =false;
 } 
 ocultarInputAcceso(){
  this.banderaAcceso=false;
  this.banderaBtnAcceso =true;
 }

 mostrarInputAccesoE(){
  this.banderaAcceso1=true;
  this.banderaBtnAcceso1 =false;
 }
 ocultarInputAcceso1(){
  this.banderaAcceso1=false;
  this.banderaBtnAcceso1 =true;
 }

//  =========== FORMULARIOS ============

formAE = new FormGroup({
  accesoE: new FormControl('', [Validators.required, Validators.minLength(8)])
})
get f() {
  return this.formAE.controls;
}
formAD = new FormGroup({
  accesoD: new FormControl('', [Validators.required, Validators.minLength(8)])
})
get f1() {
  return this.formAD.controls;
}

// ====== ACCESO DOCENTE=========

accesoDocente(form:any){
  let contra = form.accesoD;
  let pass = 12345678;
  if(contra == pass){
    Swal.fire({
      allowOutsideClick:false,
      icon  : 'info',
      title : 'info',
      text  : 'Espere por favor'
      });
    Swal.showLoading();
    this.route.navigateByUrl('/dashboard/docente');
    Swal.close();
    Swal.fire({
      icon  : 'success',
      title : '¡Ingreso!',
      text  : 'Acceso permitido',
      timer: 800
    });

  }else{
    Swal.fire({
      icon  : 'error',
      title : '¡Error!',
      text  :'Contraseña Incorrecta'
    })
  }
  
}


}
