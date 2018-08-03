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

}
