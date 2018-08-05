import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-productounico',
  templateUrl: 'productounico.html',
})
export class ProductounicoPage {
  objetoProducto:any;
  usuarioCompra: any;
  cantidad: any;
  private db: any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController) {
    this.db = firebase.firestore(); 
    this.objetoProducto = this.navParams.data.producto;
    this.usuarioCompra = this.navParams.data.usuario;
  }

  ionViewDidLoad() {
    console.log("ESTE ES EL PRODUCTO ACTUAL" + this.objetoProducto);
    console.log("ESTE ES EL USUARIO ACTUAL" + this.usuarioCompra);
  }

  addCart() {
    let cantidad = ((document.getElementById("cantidadProducto") as HTMLInputElement).value);
    console.log("Se añadieron: " + cantidad + " productos");
    const alert = this.alertCtrl.create({
      title: 'Añadido correctamente!',
      subTitle: 'Tu producto ha sido añadido a tu carrito!',
      buttons: ['OK']
    });
    alert.present();
    this.navCtrl.pop();

  }

  editarCompra(){
    //this.actualizarDocumento('productos', this.objetoProducto.$key, this.miFormulario.value);
    console.log('Edicion realizada correctamente');
    this.navCtrl.pop();
  }

  actualizarDocumento(collectionName: string, docID: string, dataObj: any): Promise<any> {
    return new Promise((resolve, reject) => {
        this.db
            .collection(collectionName)
            .doc(docID)
            .update(dataObj)
            .then((obj: any) => {
                resolve(obj);
            })
            .catch((error: any) => {
                reject(error);
            });
    });
  }


}
