import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {IonicPage, NavController, NavParams,Loading,LoadingController,AlertController,
  Alert } from 'ionic-angular';
  import { Camera, CameraOptions } from '@ionic-native/camera';
import { ActionSheetController } from 'ionic-angular';
import { ProductoProvider} from '../../providers/producto/producto';

/**
 * Generated class for the AdminRegistrarProductosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-registrar-productos',
  templateUrl: 'admin-registrar-productos.html',
})
export class AdminRegistrarProductosPage {
  public crearProductoForm: FormGroup;
  profilePhoto:any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, public loadingCtrl: LoadingController,
    public alertCtrl: AlertController, public formBuilder: FormBuilder,
    private camera: Camera,public actionSheetCtrl: ActionSheetController,
    public productoProvider: ProductoProvider
    ) {

      this.crearProductoForm = formBuilder.group({
        codigo: ['', Validators.required],
        nombre: ['', Validators.required],
        categoria: ['', Validators.required],
        marca: ['', Validators.required],
        descripcion: ['', Validators.required],
        precioCompra: ['', Validators.required],
        precioVenta: ['', Validators.required],
       
        stock: ['', Validators.required],
      });

    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminRegistrarProductosPage');
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
     
    }, (err) => {
     // Handle error
    });
  }
  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      
      buttons: [
        {
          icon:'ios-camera',
          text: 'Tomar una foto',
          role: 'destructive',
          
          handler: () => {
            this.takephoto();
          }
        },{
          icon:'ios-images',
          text: 'Seleccionar de galeria',
          handler: () => {
            this.cropphoto();
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
  
  crearProducto(): void {
    const loading: Loading = this.loadingCtrl.create();
    loading.present();
    
    if(this.profilePhoto == undefined){
      this.profilePhoto = 'http://rebeldstore.com/352/sudadera-original-hombre-grey.jpg';
      
    }
   
    const categoria = this.crearProductoForm.value.categoria;
    const codigo= this.crearProductoForm.value.codigo;
    const descripcion= this.crearProductoForm.value.descripcion;
   
    const imagen= this.profilePhoto;
    const marca= this.crearProductoForm.value.marca;
    const nombre= this.crearProductoForm.value.nombre;
    const precioCompra= this.crearProductoForm.value.precioCompra;
    const precioVenta=this.crearProductoForm.value.precioVenta;
    const stock= this.crearProductoForm.value.stock;
   
   


    this.productoProvider.crearProducto(categoria,codigo,imagen,descripcion,marca,nombre,precioCompra,precioVenta,stock)
      .then(
        () => {
          loading.dismiss().then(() => {
            const alert: Alert = this.alertCtrl.create({
              message: "Guardado con exito",
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
