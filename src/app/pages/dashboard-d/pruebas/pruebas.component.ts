import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.scss']
})
export class PruebasComponent implements OnInit {
  public modal : any;
  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }


  // ============================ ABRIR MODAL =================================
abrirModal (ModalContent: any): void {
  this.modal = this.modalService.open(ModalContent,{size:'md', centered: true});
}

cerrarModal(){
  this.modal.close();
}

guardarTema(){
  Swal.fire({
    allowOutsideClick:false,
    icon:'success',
    title:'Se ha creado la temática',
    text:'Temática creada correctamente',
    timer:1500
    });
    this.cerrarModal();
}


}
