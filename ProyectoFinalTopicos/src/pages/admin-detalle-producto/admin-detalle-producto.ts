import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Loading,LoadingController,AlertController,Alert  } from 'ionic-angular';
import firebase from 'firebase';
import 'firebase/firestore';
import { ModalController } from 'ionic-angular';
import { AdminEditarProductoPage } from '../admin-editar-producto/admin-editar-producto';
import { ProductoProvider} from '../../providers/producto/producto';
import { Camera, CameraOptions } from '@ionic-native/camera';
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
export class AdminDetalleProductoPage{
  public profilePhoto:any;
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
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl: ModalController,public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public productoProvider: ProductoProvider,private camera: Camera) {
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

  
  presentProductoModal(id:string) {
    
    let productoModal = this.modalCtrl.create(AdminEditarProductoPage, { id: id });
    productoModal.present();
  }

  desactivarProduct() {
    const confirm = this.alertCtrl.create({
      title: 'Desactivar',
      message: 'Estas seguro de desactivar este producto?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Desactivar',
          handler: () => {
            const loading: Loading = this.loadingCtrl.create();
            loading.present();
            this.productoProvider.desactivarProducto(this.id)
            .then(
              () => {
                this.detallesProd.estado = 'desactivo';
                loading.dismiss().then(() => {
                  const alert: Alert = this.alertCtrl.create({
                    message: "Desactivado con exito",
                    buttons: [{ text: 'Ok', role: 'cancel' }],
                  });
                  alert.present();
                });
              },
              error => {
                loading.dismiss().then(() => {
                  const alert: Alert = this.alertCtrl.create({
                    message: error.message,
                    buttons: [{ text: 'Ok', role: 'cancel' }],
                  });
                  alert.present();
                });
              }
            );
          }
        }
      ]
    });
    confirm.present();
  }

  activarProduct() {
    const confirm = this.alertCtrl.create({
      title: 'Activar',
      message: 'Estas seguro de desactivar este producto?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Activar',
          handler: () => {
            
            const loading: Loading = this.loadingCtrl.create();
            loading.present();
            this.productoProvider.activarProducto(this.id)
            .then(
              () => {
                this.detallesProd.estado = 'activo';
                loading.dismiss().then(() => {
                  const alert: Alert = this.alertCtrl.create({
                    message: "Activado con exito",
                    buttons: [{ text: 'Ok', role: 'cancel' }],
                  });
                  alert.present();
                });
              },
              error => {
                loading.dismiss().then(() => {
                  const alert: Alert = this.alertCtrl.create({
                    message: error.message,
                    buttons: [{ text: 'Ok', role: 'cancel' }],
                  });
                  alert.present();
                });
              }
            );
          }
        }
      ]
    });
    confirm.present();
  }

  takephoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit:true,
      targetWidth:300,
      targetHeight:500
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64:
     this.profilePhoto = 'data:image/jpeg;base64,' + imageData;
     const loading: Loading = this.loadingCtrl.create();
     loading.present();
     this.productoProvider.actualizarImagenProducto(this.id,this.profilePhoto)
     .then(
       () => {
       
         loading.dismiss().then(() => {
          this.detallesProd.imagen = this.profilePhoto;
           const alert: Alert = this.alertCtrl.create({
             message: "Imagen actualizada",
             buttons: [{ text: 'Ok', role: 'cancel' }],
           });
           alert.present();
         });
       },
       error => {
         loading.dismiss().then(() => {
           const alert: Alert = this.alertCtrl.create({
             message: error.message,
             buttons: [{ text: 'Ok', role: 'cancel' }],
           });
           alert.present();
         });
       }
     );
    }, (err) => {
     // Handle error
    });
  }

  cropphoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      allowEdit:true,
      targetWidth:300,
      targetHeight:300

    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64:
     this.profilePhoto = 'data:image/jpeg;base64,' + imageData;
     const loading: Loading = this.loadingCtrl.create();
     loading.present();
     this.productoProvider.actualizarImagenProducto(this.id,this.profilePhoto)
     .then(
       () => {
       
         loading.dismiss().then(() => {
          this.detallesProd.imagen = this.profilePhoto;
           const alert: Alert = this.alertCtrl.create({
             message: "Imagen actualizada",
             buttons: [{ text: 'Ok', role: 'cancel' }],
           });
           alert.present();
         });
       },
       error => {
         loading.dismiss().then(() => {
           const alert: Alert = this.alertCtrl.create({
             message: error.message,
             buttons: [{ text: 'Ok', role: 'cancel' }],
           });
           alert.present();
         });
       }
     );
    }, (err) => {
     // Handle error
    });
  }
}
