import { HttpErrorResponse } from '@angular/common/http';
import { taggedTemplate } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PortadaComponent } from 'src/app/Components/portada/portada.component';
import { BotonesService } from 'src/app/service/botones.service';

@Component({
  selector: 'boton-edit',
  templateUrl: './boton-edit.component.html',
  styleUrls: ['./boton-edit.component.css']
})
export class BotonEditComponent implements OnInit {


  @Input() color : string = "";
  
  @Input() id!: any;
  @Output() botoneraCerrada = new EventEmitter();
  @Input() object!: any;
  name!: string;
  mostrarEditar : boolean = false;
  portada! : PortadaComponent;
  message!: any;
  editarModel!: boolean;
  nuevoModel!: boolean;
  isLogged!: boolean;
  

  mostrarDiv: boolean = false;

  shareObject={
    url: window.document.location.href,
    titulo: 'Portfolio de German'
  }
  

  constructor(private btnService:BotonesService,
      private router:Router) { }

  ngOnInit(): void {
    this.recibeBtn();
    console.log(this.id, this.object);
    this.recibeLogged();
        
  }

  onExit(): void {
    this.mostrarDiv = false;
    this.botoneraCerrada.emit(false);
    console.log("exit")
    this.id= null;
    this.name= " ";
    this.editarModel=false;
    this.mostrarEditar= false;
    this.object= null;
    this.nuevoModel= false;
  }

  recibeBtn(){
    
    this.btnService.recibeBtn().subscribe((d)=>{
      this.mostrarDiv = d;
      console.log("recibe solicitud de botonera")
      this.btnService.sendId(this.id);
      this.btnService.sendNombre(this.name)
      this.btnService.sendEditar(this.editarModel)
      this.btnService.declararId();
      this.btnService.declararName();
      this.btnService.declararMostrar();
    })

    this.recibeId();
    this.recibeName();
    this.recibeObject();
  }

  recibeId(){
    this.btnService.recibeId().subscribe((d)=>{
      this.id = d;
    })
  }

  recibeLogged(){
    this.btnService.recibeLogged().subscribe((d)=>{
      this.isLogged = d;
    })
  }

  recibeName(){
    this.btnService.recibeName().subscribe((d)=>{
      this.name = d;
    })
  }

  recibeObject(){
    this.btnService.recibeObject().subscribe((d)=>{
      this.object = d;
    })
  }
  


  mostrarOpciones(){
    this.mostrarEditar = true;
  }

  showDiv(dato: string){
    console.log(dato)
  }


  onEditar(): void {
    
    console.log("editar a esta id: " + this.id + " con este nombre: " + this.name);
    let editarModal = this.editarModel = true;
    this.btnService.sendEditar(editarModal); //enviando al servicio btn
    console.log("enviando al servicio desde EDITAR " + editarModal);
    this.btnService.mostrarEditar(this.id, this.name);
    
  }

  onBorrar(): any {
    const id = this.id;
    const name = this.name;

    this.btnService.delete(id, name).subscribe({
      next: ( response: void) => {
        console.log(response);
      },
      error: ( error: HttpErrorResponse ) => {
        console.log(error.message);
      }
    });
  }

  onShare(){
    const url = window.document.location.href;
    console.log(window.document.location.href)
    if(navigator.share){
      navigator.share(this.shareObject).then(() => console.log(this.shareObject)).catch(error => console.log(url, error));
    } else {
      console.log("no supported")
    }
  }

  onGuardar(){
    console.log("guardar");
    location.reload();
  }

  onAgregar(){
    console.log("editar a esta id: " + this.id + " con este nombre: " + this.name);
    let nuevoModel = this.nuevoModel = true;
    this.btnService.sendAgregar(nuevoModel); //enviando al servicio btn
    console.log("enviando al servicio desde AGREGAR " + nuevoModel);
    this.btnService.sendId(this.id);
    this.btnService.sendNombre(this.name)
  }

  sendFalse(){
    this.btnService.sendFalse(false);
  }
}
