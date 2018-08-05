import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProductounicoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-productounico',
  templateUrl: 'productounico.html',
})
export class ProductounicoPage {
  objetoProducto:any;
  usuarioCompra: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.objetoProducto = this.navParams.data.producto;
    this.usuarioCompra = this.navParams.data.usuario;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductounicoPage');
  }

}
