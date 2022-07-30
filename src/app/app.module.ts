import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavegacionComponent } from './Components/barra-navegacion/barra-navegacion.component';
import { PortadaComponent } from './Components/portada/portada.component';
import { AcercaDeMiComponent } from './Components/acerca-de-mi/acerca-de-mi.component';
import { ExperienciaComponent } from './Components/experiencia/experiencia.component';
import { BotonEditComponent } from './accesorios/boton-edit/boton-edit.component';
import { EducacionComponent } from './Components/educacion/educacion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './accesorios/login/login.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PieComponent } from './Components/pie/pie.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { ModalComponent } from './accesorios/modal/modal.component';
import { BienvenidaComponent } from './accesorios/bienvenida/bienvenida.component';
import { HomeComponent } from './Components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    PortadaComponent,
    AcercaDeMiComponent,
    ExperienciaComponent,
    BotonEditComponent,
    EducacionComponent,
    LoginComponent,
    PieComponent,
    SkillsComponent,
    ModalComponent,
    BienvenidaComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent],
})
export class AppModule {}
