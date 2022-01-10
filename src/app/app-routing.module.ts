import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { DetalleComponent } from './pages/detalle/detalle.component';

const routes: Routes = [
  // raiz
  {path: '', component: PokedexComponent},
  {path: 'crear-cuenta', component: RegistroComponent},
  {path: 'ingresar', component: LoginComponent},
  {path: 'pokemon/:id', component: DetalleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
