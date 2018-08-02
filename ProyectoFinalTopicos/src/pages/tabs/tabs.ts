import { Component } from '@angular/core';
import { AdminProductosPage } from '../admin-productos/admin-productos';
import { AdminUsersPage } from '../admin-users/admin-users';
import { AdminRegistrarProductosPage } from '../admin-registrar-productos/admin-registrar-productos';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AdminProductosPage;
  tab2Root = AdminUsersPage;
  tab3Root = AdminRegistrarProductosPage;

  constructor() {

  }
}
