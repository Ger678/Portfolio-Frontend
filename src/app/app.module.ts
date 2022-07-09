import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { PortadaComponent } from './portada/portada.component';
import { AcercaDeMiComponent } from './acerca-de-mi/acerca-de-mi.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { BarraDeProgresoComponent } from './accesorios/barra-de-progreso/barra-de-progreso.component';
import { BotonEditComponent } from './accesorios/boton-edit/boton-edit.component';
import { EducacionComponent } from './educacion/educacion.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './accesorios/login/login.component'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PieComponent } from './pie/pie.component';
import { SkillsComponent } from './skills/skills.component';
import { ModalComponent } from './accesorios/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    PortadaComponent,
    AcercaDeMiComponent,
    ExperienciaComponent,
    HabilidadesComponent,
    BarraDeProgresoComponent,
    BotonEditComponent,
    EducacionComponent,
    LoginComponent,
    PieComponent,
    SkillsComponent,
    ModalComponent,
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
  bootstrap: [AppComponent]
})
export class AppModule { }
