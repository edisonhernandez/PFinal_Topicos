import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { ProductounicoPage } from '../productounico/productounico';


@IonicPage()
@Component({
  selector: 'page-listaproductos',
  templateUrl: 'listaproductos.html',
})
export class ListaproductosPage {

  productos: any;
  private db: any;
  model: any= {};
  nombreColeccion: string = "productos";
  usuarios: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.db = firebase.firestore();
    this.cargarProductos();
  }

  cargarProductos(){
    this.obtenerDocumentos(this.nombreColeccion).then((e)=>{
      this.productos = e;
  });

    this.obtenerDocumentos('usuarios').then((f)=>{
      this.usuarios = f;
      console.log(this.usuarios[0]);
});

  }

  ionViewDidEnter() {    
    this.cargarProductos();
  }

  verProducto(producto){
    //console.log(producto);
    this.navCtrl.push(ProductounicoPage,{
      producto: producto,
      usuario: this.usuarios[0]
    });
  }

  /*METODOS CRUD */

  obtenerDocumentos(collection: string): Promise<any> {
    return new Promise((resolve, reject) => {
        this.db.collection(collection)
            .get()
            .then((querySnapshot) => {
                let arr = [];
                querySnapshot.forEach(function (doc) {
                    var obj = JSON.parse(JSON.stringify(doc.data()));
                    obj.$key = doc.id
                    //console.log(obj)
                    arr.push(obj);
                });
 
                if (arr.length > 0) {
                    console.log("Datos obtenidos:", arr, arr.length,typeof(arr));
                    resolve(arr);
                } else {
                    console.log("No se encontraron documentos!");
                    resolve(null);
                }
 
 
            })
            .catch((error: any) => {
                reject(error);
            });
    });
  }



}
