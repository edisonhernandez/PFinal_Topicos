import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminDetalleProductoPage } from './admin-detalle-producto';

@NgModule({
  declarations: [
    AdminDetalleProductoPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminDetalleProductoPage),
  ],
})
export class AdminDetalleProductoPageModule {}
