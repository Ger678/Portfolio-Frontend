import { Component, Input, OnInit } from '@angular/core';

// importamos las librerias de formulario que necesitamos

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BotonesService } from 'src/app/service/botones.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  });
  logged!: boolean;
  

  display='none';


  constructor(
    private modalService: NgbModal,
    public activeModalService: NgbActiveModal,
    private btnService: BotonesService,
    // inyectar en el constructor el formBuilder
    ) {
  }
  
  ngOnInit(): void {
  }

  onLogin(form: any){
    console.log(form)
  this.isLogged()
  }

  closeModal(){
    this.activeModalService.close();
  }

  isLogged(){
    const admin = {
      email: "germanalejandroaguirre678@gmail.com",
      pasword: "German530060+"
    };
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    if (email == admin.email && password == admin.pasword){
      this.logged = true;
      console.log(this.logged);
      this.closeModal();
      return this.btnService.sendLogged(this.logged);      
    }
    else{
      console.log(email, password, admin)
      return console.log("no esta loggeado")      
    }
  }

}



