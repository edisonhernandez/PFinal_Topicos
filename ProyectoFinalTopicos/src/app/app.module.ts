import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
//import {AngularFireModule} from 'angularfire2';
//import {AngularFirestoreModule} from 'angularfire2/firestore';
import * as firebase from 'firebase';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListaproductosPage } from '../pages/listaproductos/listaproductos';
import { ProductounicoPage } from '../pages/productounico/productounico';


export const firebaseConfig = {
  apiKey: "AIzaSyArzyeoT4gsBUy1eyH3rScuB1TB3SfmD-Q",
    authDomain: "proyectofinaltopicos-f4a43.firebaseapp.com",
    databaseURL: "https://proyectofinaltopicos-f4a43.firebaseio.com",
    projectId: "proyectofinaltopicos-f4a43",
    storageBucket: "",
    messagingSenderId: "448140466268"
}

firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListaproductosPage,
    ProductounicoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListaproductosPage,
    ProductounicoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
