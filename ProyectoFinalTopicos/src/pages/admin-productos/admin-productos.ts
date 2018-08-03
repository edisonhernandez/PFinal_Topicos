import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductoProvider } from '../../providers/producto/producto';
import { Observable } from 'rxjs/Observable';
import { Producto } from '../../models/producto.interface';

/**
 * Generated class for the AdminProductosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-productos',
  templateUrl: 'admin-productos.html',
})
export class AdminProductosPage {
  public listaProductos: Observable<Producto[]>;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,public productoProvider: ProductoProvider) {
  }

  ionViewDidEnter() {
    this.listaProductos = this.productoProvider.listarProductos().valueChanges();
  }

}
