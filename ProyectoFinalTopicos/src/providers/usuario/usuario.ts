//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Usuario} from '../../models/usuario.interface';


/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuarioProvider {

  constructor(/*public http: HttpClient*/public firestore: AngularFirestore) {
    console.log('Hello UsuarioProvider Provider');
  }
  listarUsuarios(): AngularFirestoreCollection<Usuario> {
    return this.firestore.collection(`usuarios`);
  }
}
