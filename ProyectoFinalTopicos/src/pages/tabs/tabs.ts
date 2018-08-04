import { Component } from '@angular/core';
import { AdminProductosPage } from '../admin-productos/admin-productos';
import { AdminUsersPage } from '../admin-users/admin-users';
import { AdminRegistrarProductosPage } from '../admin-registrar-productos/admin-registrar-productos';
import { SmartAudioProvider } from '../../providers/smart-audio/smart-audio';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AdminProductosPage;
  tab2Root = AdminUsersPage;
  tab3Root = AdminRegistrarProductosPage;

  constructor(  public smartAudio: SmartAudioProvider) {

  }
  changeTab() {
    this.smartAudio.play('tab');
}
}
