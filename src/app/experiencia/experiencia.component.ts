import { Component, HostListener, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Experiencia } from '../models/experiencia';
import { ExperienciaService } from '../service/experiencia.service';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { BotonesService } from '../service/botones.service';
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
  animations: [
    trigger('inOut', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)',
        opacity: 1 }),
        animate(700)
      ]),
      transition(':leave', [
        animate(100, style({ transform: 'translateX(100%)',
        opacity: 0 }))
      ])
    ])
  ]
})
export class ExperienciaComponent implements OnInit {


  public expes : Experiencia[] = [];
  public editExpe!: Experiencia;
  public borrarExpe!: Experiencia;
  editar!: boolean;
  nuevo!: boolean;
  id: number = 3;
  titulo: string = "experiencia";
  contenido!: string;
  icono!: string;
  tittle!: string;
  mostrar!: boolean;
  object: Experiencia =new Experiencia(this.id, this.tittle, this.contenido, this.icono) ;

  constructor( private expeService: ExperienciaService,
               private btnService: BotonesService) { }

  ngOnInit(): void {
    this.getExpe();
  }


  getExpe(): void {
     this.expeService.getExpe().subscribe(
      data => {
        this.expes = data;
      },
      error => {
        console.log(error);
      }
    );  
  }

  mostrarBtn(id: number):any{
    this.mostrar = true;
    this.btnService.sendBtn(this.mostrar);
    this.btnService.sendId(id);
    this.btnService.sendNombre(this.titulo);
    this.btnService.sendObject(this.object);
  }

  // estos 3 metodos los utilizo para abrir los divs de "edidar" y "agregar"

  //este metodo lo vinculo con el template
  mostrarEditarOrNuevo(){
    this.nuevoModel();
    this.editarModel();
  }

  //metodo para abrir el div "Agregar nuevo"
  nuevoModel(){
    this.btnService.mostrarNuevo(this.id, this.titulo).subscribe((data) => {
      this.nuevo = data;
    });
  }

  //metodo para abrir el div "Editar"
  editarModel(){
      this.btnService.mostrarEditar(this.id, this.titulo).subscribe((d)=>{
      this.editar = d;
    });
  }


  //metodo para enviar al servicio que se comunica con la API
  update(form: any){
    this.expeService.editar(this.id, form).subscribe();
  }

  //metodo para enviar al servicio que se comunica con la API
  crear(form: any): void{
    this.expeService.save(form).subscribe();
    console.log(form)
  }

  //este metodo cierra los divs de "editar" y "nuevo"
  cerrar(){
    this.editar = false;
    this.nuevo = false;
    console.log("it works  " + this.editar)
  }

  }
  


