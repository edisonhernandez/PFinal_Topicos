import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaproductosPage } from '../listaproductos/listaproductos';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

/*export interface Producto {
  id: string;
  categoria:string;
  codigo:string;
  descripcion:string;
  estado:string;
  fechaRegistro:string;
  imagen:string;
  marca:string;
  nombre:string;
  precioCompra:number;
  precioVenta:number;
  stock:number;

}*/


export class HomePage {

  

  constructor(public navCtrl: NavController) {
    
  }

  productos(){
    this.navCtrl.push(ListaproductosPage);
  }

}
