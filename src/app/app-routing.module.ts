import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { GenerarCsvComponent } from './pages/generar-csv/generar-csv.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ListarMovimientosComponent } from './pages/listar-movimientos/listar-movimientos.component';
import { LoginComponent } from './pages/login/login.component';
import { ValidarPagoComponent } from './pages/validar-pago/validar-pago.component';
import { CheckSessionGuardGuard } from './services/guard/check-session-guard.guard';
import { GetInGuardGuard } from './services/guard/get-in-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
    canActivate: [CheckSessionGuardGuard],
  },
  {
    path: 'inicio',
    component: InicioComponent,
    pathMatch: 'full',
    canActivate: [GetInGuardGuard],
  },
  {
    path: 'validar-pago',
    component: ValidarPagoComponent,
    pathMatch: 'full',
    canActivate: [GetInGuardGuard],
  },
  {
    path: 'listar-movimientos',
    component: ListarMovimientosComponent,
    pathMatch: 'full',
    canActivate: [GetInGuardGuard],
  },
  {
    path: 'generar-csv',
    component: GenerarCsvComponent,
    pathMatch: 'full',
    canActivate: [GetInGuardGuard],
  },

  // NotFountPath
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
})
export class AppRoutingModule {}
