import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AdminProductosPage } from '../pages/admin-productos/admin-productos';
import { AdminUsersPage } from '../pages/admin-users/admin-users';
import { AdminRegistrarProductosPage } from '../pages/admin-registrar-productos/admin-registrar-productos';
import { TabsPage } from '../pages/tabs/tabs';
import { ProductoProvider } from '../providers/producto/producto';
import { AdminDetalleProductoPage  } from '../pages/admin-detalle-producto/admin-detalle-producto';
import { AdminDetalleUsuarioPage } from '../pages/admin-detalle-usuario/admin-detalle-usuario';

import { ParallaxHeaderDirective } from '../directives/parallax-header/parallax-header';
import { Camera } from '@ionic-native/camera';
import { UsuarioProvider } from '../providers/usuario/usuario';

export const firebaseConfig = {
  apiKey: "AIzaSyArzyeoT4gsBUy1eyH3rScuB1TB3SfmD-Q",
    authDomain: "proyectofinaltopicos-f4a43.firebaseapp.com",
    databaseURL: "https://proyectofinaltopicos-f4a43.firebaseio.com",
    projectId: "proyectofinaltopicos-f4a43",
    storageBucket: "",
    messagingSenderId: "448140466268"
}
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AdminProductosPage,
    AdminUsersPage,
    AdminRegistrarProductosPage,
    TabsPage,
    ParallaxHeaderDirective,
    AdminDetalleProductoPage,
    AdminDetalleUsuarioPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AdminProductosPage,
    AdminUsersPage,
    AdminRegistrarProductosPage,
    TabsPage,
    AdminDetalleProductoPage,
    AdminDetalleUsuarioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductoProvider,
    Camera,
    UsuarioProvider
  ]
})
export class AppModule {}
