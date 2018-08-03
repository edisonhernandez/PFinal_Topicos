import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import 'firebase/firestore';
/**
 * Generated class for the AdminDetalleProductoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-detalle-producto',
  templateUrl: 'admin-detalle-producto.html',
})
export class AdminDetalleProductoPage {
  public detallesProd = { id:'',
    categoria:'',
    codigo:'',
    descripcion:'',
    estado:'',
    fechaRegistro:'',
    imagen:'',
    marca:'',
    nombre:'',
    precioCompra:'',
    precioVenta:'',
    stock:'',}
id = '';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.id = this.navParams.get('id');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminDetalleProductoPage');
  }
  ionViewDidEnter(){
    /*this.inforuserCollection = this.asf.collection('infoUser');
    this.info = this.inforuserCollection.valueChanges();
  
    var db = firebase.firestore();
    this.inforuserCollection = this.asf.collection('infoUser').doc('k9p4uJuEMbOgusb3Ic3J');
    this.info = this.inforuserCollection.valueChanges();*/
    var db = firebase.firestore();
    var docRef = db.collection("productos").doc(this.id);
  var self = this;
  docRef.get().then(function(doc) {
      if (doc.exists) {
        const mydata = doc.data();
        /*self.userName = mydata.userNombre;
        self.userFot = mydata.userFoto;*/
        self.detallesProd.categoria = mydata.categoria;
        self.detallesProd.codigo = mydata.codigo;
        self.detallesProd.descripcion = mydata.descripcion;
        self.detallesProd.estado = mydata.estado;
        self.detallesProd.fechaRegistro = mydata.fechaRegistro;
        self.detallesProd.imagen = mydata.imagen;
        self.detallesProd.marca = mydata.marca;
        self.detallesProd.nombre = mydata.nombre;
        self.detallesProd.precioCompra = mydata.precioCompra;
        self.detallesProd.precioVenta = mydata.precioVenta;
        self.detallesProd.stock = mydata.stock;







          console.log("Document data:", doc.data());
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
  }).catch(function(error) {
      console.log("Error getting document:", error);
  });

  
  }
}
