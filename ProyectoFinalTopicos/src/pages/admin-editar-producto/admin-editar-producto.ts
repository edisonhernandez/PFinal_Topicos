import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Loading,LoadingController,AlertController,
  Alert } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductoProvider} from '../../providers/producto/producto';
import { SmartAudioProvider } from '../../providers/smart-audio/smart-audio';
 
/**
 * Generated class for the AdminEditarProductoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-editar-producto',
  templateUrl: 'admin-editar-producto.html',
})
export class AdminEditarProductoPage {
  public editarProductoForm: FormGroup;
  public idProd:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder,public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public productoProvider: ProductoProvider,public smartAudio: SmartAudioProvider) {
    this.editarProductoForm = formBuilder.group({
      codigo: ['', Validators.required],
      nombre: ['', Validators.required],
      categoria: ['', Validators.required],
      marca: ['', Validators.required],
      descripcion: ['', Validators.required],
      precioCompra: ['', Validators.required],
      precioVenta: ['', Validators.required],
     
      stock: ['', Validators.required],
    });
    this.idProd = this.navParams.get('id');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminEditarProductoPage');
  }

  editarProducto(){
   this.smartAudio.play('tabSwitch');
    
    const categoria = this.editarProductoForm.value.categoria;
    const codigo= this.editarProductoForm.value.codigo;
    const descripcion= this.editarProductoForm.value.descripcion;
    const marca= this.editarProductoForm.value.marca;
    const nombre= this.editarProductoForm.value.nombre;
    const precioCompra= this.editarProductoForm.value.precioCompra;
    const precioVenta=this.editarProductoForm.value.precioVenta;
    const stock= this.editarProductoForm.value.stock;
   
   
if(categoria != '' && codigo !='' && descripcion !='' && marca !='' && nombre != '' &&
    precioCompra !='' && precioVenta !='' && stock !=''){
      const loading: Loading = this.loadingCtrl.create();
      loading.present();
      this.productoProvider.updateProducto(this.idProd,categoria,codigo,descripcion,marca,nombre,precioCompra,precioVenta,stock)
      .then(
        () => {
          loading.dismiss().then(() => {
            this.smartAudio.stop('tabSwitch');
            const alert: Alert = this.alertCtrl.create({
              message: "Actualizado con exito",
              buttons: [{ text: 'Ok', role: 'cancel' }],
            });
            this.smartAudio.play('confirmar');
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
}else{
  alert('llena todos los campos');
}

    
  }

  
  
}
