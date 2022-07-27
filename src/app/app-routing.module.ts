import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './accesorios/bienvenida/bienvenida.component';
import { LoginComponent } from './accesorios/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { PieComponent } from './Components/pie/pie.component';

const routes: Routes = [
  {path: 'bienvenida', component: BienvenidaComponent},
  {path: 'info', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'mail', component: PieComponent},
  {path: '', redirectTo: '/bienvenida', pathMatch: 'full'},
  {path: '**', component: BienvenidaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
