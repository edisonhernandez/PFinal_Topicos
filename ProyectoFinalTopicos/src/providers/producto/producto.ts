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
    imagen:string,
    descripcion:string,
    marca:string,
    nombre:string,
    precioCompra:number,
    precioVenta:number,
    stock:number): Promise<void> {
    const id = this.firestore.createId();
    const fechaRegistro=new Date();
    const estado = 'activo';
   // const descripcion = 'asd'
   // const imagen = 'aa'
    return this.firestore.doc(`productos/${id}`).set({
      id,categoria,codigo,estado,fechaRegistro,imagen,descripcion,marca,nombre,precioCompra,precioVenta ,stock
    });
  }

  updateProducto(id: string, categoria:string, codigo:string, descripcion:string, marca:string,nombre:string,
  precioCompra:number,precioVenta:number,stock:number): Promise<void> {
    return this.firestore.doc(`productos/${id}`).update({categoria:categoria,codigo:codigo,descripcion:descripcion,marca:marca,
      nombre:nombre,precioCompra:precioCompra,precioVenta:precioVenta,stock:stock});
  }

  desactivarProducto(id: string): Promise<void> {
      return this.firestore.doc(`productos/${id}`).update({estado:'desactivo'});
    }
    activarProducto(id: string): Promise<void> {
      return this.firestore.doc(`productos/${id}`).update({estado:'activo'});
    }
    actualizarImagenProducto(id: string, imagen:any): Promise<void> {
      return this.firestore.doc(`productos/${id}`).update({imagen:imagen});
    }
}
