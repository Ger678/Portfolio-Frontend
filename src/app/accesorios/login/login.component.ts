import { Component, Input, OnInit } from '@angular/core';

// importamos las librerias de formulario que necesitamos

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  display='none';

  signupForm: FormGroup;

  constructor(

    private modalService: NgbModal,
    public activeModalService: NgbActiveModal,
    // inyectar en el constructor el formBuilder
    private _builder: FormBuilder) {
      // creamos el grupo de controles para el formulario
    this.signupForm = this._builder.group({
      nombre: ['', [Validators.required, Validators.minLength(5),Validators.maxLength(12)]],
      usuario: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      clave: ['', [Validators.required, Validators.minLength(8)]]
    })
    
  }

  enviar(values: any){
  console.log(values)
  }

  ngOnInit(): void {
  }

  closeModal(){
    this.activeModalService.close();
  }

}



