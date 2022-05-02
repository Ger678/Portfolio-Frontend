import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'boton-edit',
  templateUrl: './boton-edit.component.html',
  styleUrls: ['./boton-edit.component.css']
})
export class BotonEditComponent implements OnInit {

  @Input() color : string = "";
  @Output() btnClick = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.btnClick.emit();
  }
}
