import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminDetalleUsuarioPage } from './admin-detalle-usuario';

@NgModule({
  declarations: [
    AdminDetalleUsuarioPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminDetalleUsuarioPage),
  ],
})
export class AdminDetalleUsuarioPageModule {}
