import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminEditarProductoPage } from './admin-editar-producto';

@NgModule({
  declarations: [
    AdminEditarProductoPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminEditarProductoPage),
  ],
})
export class AdminEditarProductoPageModule {}
