import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Paralelo } from '../../modelos/paralelo.model';

const PARALELO: Paralelo[] = [
  {
    id: '1',
    numeracion: 'Primero',
    letra: 'A'
  },
  {
    id: '2',
    numeracion: 'Primero',
    letra: 'J'
  },
  {
    id: '3',
    numeracion: 'Primero',
    letra: 'K'
  },
  {
    id: '4',
    numeracion: 'Primero',
    letra: 'F'
  },
  {
    id: '5',
    numeracion: 'Primero',
    letra: 'C'
  }
 ];
@Component({
  selector: 'app-tablero-cursos',
  templateUrl: './tablero-cursos.component.html',
  styleUrls: ['./tablero-cursos.component.scss']
})
export class TableroCursosComponent implements OnInit {

    //Tabla
    page = 1;
    pageSize = 5;
    collectionSize = PARALELO.length;
    paralelo!: Paralelo[];

    banderaPaginacion:any;

    //Modal
    modal:any;

  constructor(  private modalService:NgbModal ) {
    this.refreshParalelo();
   }

  ngOnInit(): void {
 
  }
  refreshParalelo() {

    if(this.collectionSize <= this.pageSize){
      this.banderaPaginacion = false;
    }else{
      this.banderaPaginacion = true;
    }
    this.paralelo = PARALELO
      .map((blablabla: any, i: number) => ({id: i + 1, ...blablabla}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);    
      
  }

  abrirModal (ModalContent: any): void {
    this.modal = this.modalService.open(ModalContent);
  }
  

}
