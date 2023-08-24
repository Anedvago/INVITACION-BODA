import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvitacionComponent } from './pages/invitacion/invitacion.component';
import { InvitadosComponent } from './pages/invitados/invitados.component';

const routes: Routes = [
  { path: "invitacion/:type/:id", component: InvitacionComponent },
  { path: "invitados", component: InvitadosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
