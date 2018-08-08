import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaproductosPage } from './listaproductos';

@NgModule({
  declarations: [
    ListaproductosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaproductosPage),
  ],
})
export class ListaproductosPageModule {}
