import { Component, Input, OnInit } from '@angular/core';

// importamos las librerias de formulario que necesitamos

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  signupForm: FormGroup;

  constructor(
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

}
function input() {
  throw new Error('Function not implemented.');
}

