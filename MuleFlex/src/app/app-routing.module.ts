import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { InicioComponent } from './inicio/inicio.component';
import { MuleflexComponent } from './muleflex/muleflex.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  {path:"header",component:HeaderComponent},
  {path:"",component:InicioComponent},
  {path:"muleflex",component:MuleflexComponent},
  {path:"ayuda",component:AyudaComponent},
  {path:"contacto",component:ContactoComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


