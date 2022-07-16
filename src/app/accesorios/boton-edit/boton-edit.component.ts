import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PortadaComponent } from 'src/app/portada/portada.component';
import { BotonesService } from 'src/app/service/botones.service';

@Component({
  selector: 'boton-edit',
  templateUrl: './boton-edit.component.html',
  styleUrls: ['./boton-edit.component.css']
})
export class BotonEditComponent implements OnInit {


  @Input() color : string = "";
  @Input() mostrarDiv: boolean = false;
  @Input() id !: number;
  @Output() botoneraCerrada = new EventEmitter();
  @Input() object!: string;
  mostrarEditar : boolean = false;
  portada! : PortadaComponent;
  


  constructor(private btnService:BotonesService) { }

  ngOnInit(): void {
  }

  onExit(): void {
    this.mostrarDiv = false;
    this.botoneraCerrada.emit(false);
    console.log("exit")
  }

  mostrarOpciones(){
    this.mostrarEditar = true;
  }

  showDiv():void {
    this.mostrarDiv = true
    console.log("showDiv")
  }


  onEditar(): void {
    console.log("editar");
    
  }

  onBorrar(): any {
    const id = this.id;
    const object = this.object;
    this.btnService.delete(id, object);
    console.log(id + " " + object);
  }

  onGuardar(){
    console.log("guardar");
  }

  onAgregar(){
    console.log("agregar");
  }
}
