import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
declare function slider6() :any;
@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  public isCollapsed1 = true;
  public isCollapsed2 = true;
  public isCollapsed = true;
  public modal : any;
  public modal2 : any;

  banderaTematicas = false;


  opcionSeleccionado:string ='';
  verSeleccion:string ='';
  constructor(  private modalService: NgbModal) { }

  ngOnInit(): void {
    slider6();
  }

   // ============================ ABRIR MODAL =================================
abrirModal (ModalContent: any): void {
  this.modal = this.modalService.open(ModalContent,{size:'md', centered: true});
}
abrirModal2 (ModalContent: any): void {
  this.modal2 = this.modalService.open(ModalContent,{size:'md', centered: true});
}

cerrarModal(){
  this.modal.close();
}

  abrirCard(){
    
  }

  guardarTema(){

  }

  seleccionarTematica(num:any){

    console.log(num);
    if(num ==1){
      this.banderaTematicas = true;
    }
    

  }

  generarGrupos(){

    Swal.fire({

      allowOutsideClick:false,
      icon:'info',
      title:'Buscando Producto',
      text:'Se está buscando el producto, espere por favor' ,
      });
      Swal.showLoading();

      setTimeout(() => {
      
    //  Swal.close();
        
       }, 3000);
       Swal.fire({
        allowOutsideClick:false,
        icon:'success',
        title:'Proximamente',
  
        });

  }

}
