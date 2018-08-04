import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { Observable } from 'rxjs/Observable';
import { Usuario } from '../../models/usuario.interface';
/**
 * Generated class for the AdminUsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-users',
  templateUrl: 'admin-users.html',
})
export class AdminUsersPage {
  users:any;
  public listaUsuarios: Observable<Usuario[]>;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,public usuarioProvider: UsuarioProvider) {
      this.users = 'Ccompras';
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminUsersPage');
  }
  ionViewDidEnter() {
    this.listaUsuarios = this.usuarioProvider.listarUsuarios().valueChanges();
  }
}
