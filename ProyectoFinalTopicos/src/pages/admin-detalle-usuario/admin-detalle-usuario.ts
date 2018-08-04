import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import 'firebase/firestore';
import { ModalController, ViewController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
/**
 * Generated class for the AdminDetalleUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-detalle-usuario',
  templateUrl: 'admin-detalle-usuario.html',
})
export class AdminDetalleUsuarioPage {
public idUser:string;
public detallesUser = { id:'',
    nombre:'',
    apellidos:'',
    email:'',
    direccion:'',
    telefono:'',
    celular:'',
    nacimiento:'',
    fechaRegistro:'',
    genero:'',
    imagen:'',
    estado:'',}
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,public viewCtrl: ViewController,public loadingCtrl: LoadingController) {
  this.idUser = this.navParams.get('id');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminDetalleUsuarioPage');
    this.presentLoading();
  }
  ionViewDidEnter(){
   
    /*this.inforuserCollection = this.asf.collection('infoUser');
    this.info = this.inforuserCollection.valueChanges();
  
    var db = firebase.firestore();
    this.inforuserCollection = this.asf.collection('infoUser').doc('k9p4uJuEMbOgusb3Ic3J');
    this.info = this.inforuserCollection.valueChanges();*/
    var db = firebase.firestore();
    var docRef = db.collection("usuarios").doc(this.idUser);
  var self = this;
  docRef.get().then(function(doc) {
    
      if (doc.exists) {
        const mydata = doc.data();
        /*self.userName = mydata.userNombre;
        self.userFot = mydata.userFoto;*/
        self.detallesUser.nombre = mydata.nombre;
        self.detallesUser.apellidos = mydata.apellidos;
        self.detallesUser.email = mydata.email;
        self.detallesUser.direccion = mydata.direccion;
        self.detallesUser.telefono = mydata.telefono;
        self.detallesUser.celular = mydata.celular;
        self.detallesUser.nacimiento = mydata.nacimiento;
        self.detallesUser.fechaRegistro = mydata.fechaRegistro;
        self.detallesUser.genero = mydata.genero;
        self.detallesUser.imagen = mydata.imagen;
        self.detallesUser.estado = mydata.estado;







          console.log("Document data:", doc.data());
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
  }).catch(function(error) {
      console.log("Error getting document:", error);
  });

  
  }
  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 1000
    });
    loader.present();
  }
}
