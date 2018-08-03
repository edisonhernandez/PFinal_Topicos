//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Producto} from '../../models/producto.interface';


/*
  Generated class for the ProductoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductoProvider {

  constructor(/*public http: HttpClient,*/public firestore: AngularFirestore) {
    console.log('Hello ProductoProvider Provider');
  }
  listarProductos(): AngularFirestoreCollection<Producto> {
    return this.firestore.collection(`productos`);
  }
  crearProducto(
    
    categoria:string,
    codigo:string,
   
    
    marca:string,
    nombre:string,
    precioCompra:number,
    precioVenta:number,
    stock:number): Promise<void> {
    const id = this.firestore.createId();
    const fechaRegistro='03/08/2018';
    const estado = 'activo';
    const descripcion = 'asd'
    const imagen = 'aa'
    return this.firestore.doc(`productos/${id}`).set({
      id,categoria,codigo,estado,fechaRegistro,imagen,marca,precioCompra,precioVenta,nombre, descripcion,stock
    });
  }
}
