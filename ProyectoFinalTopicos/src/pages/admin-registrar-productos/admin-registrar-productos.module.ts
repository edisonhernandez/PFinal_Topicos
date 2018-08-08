import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminRegistrarProductosPage } from './admin-registrar-productos';

@NgModule({
  declarations: [
    AdminRegistrarProductosPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminRegistrarProductosPage),
  ],
})
export class AdminRegistrarProductosPageModule {}
