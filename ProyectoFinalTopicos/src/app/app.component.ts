import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { ListaproductosPage } from '../pages/listaproductos/listaproductos';

=======
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SmartAudioProvider } from '../providers/smart-audio/smart-audio';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any = ListaproductosPage;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    smartAudio: SmartAudioProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      smartAudio.preload('tabSwitch', 'assets/sounds/2.wav');
      smartAudio.preload('tabSwitch2', 'assets/sounds/ringtones-xperia-notification.mp3');
      smartAudio.preload('activar', 'assets/sounds/mario-bros vida.mp3');
      smartAudio.preload('confirmar', 'assets/sounds/confirmar.wav');
      smartAudio.preload('tab', 'assets/sounds/tab.wav');


      
    });
  }
}

