import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './accesorios/bienvenida/bienvenida.component';
import { LoginComponent } from './accesorios/login/login.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'bienvenida', component: BienvenidaComponent},
  {path: 'info', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/bienvenida', pathMatch: 'full'},
  {path: '**', component: BienvenidaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
