import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PcLoginComponent } from './components/pc-login/pc-login.component';
import { PcNavigationComponent } from './components/html-elements/pc-navigation/pc-navigation.component';
import { PcHomeComponent } from './components/pc-home/pc-home.component';
import { PcAccountComponent } from './components/pc-account/pc-account.component';
import { PcTableComponent } from './components/html-elements/pc-table/pc-table.component';
import { PcDropdownListComponent } from './components/html-elements/pc-dropdown-list/pc-dropdown-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: PcLoginComponent},
  {path: 'account', component: PcAccountComponent},
  {path: 'table', component: PcTableComponent},
  {path: 'dropdown', component: PcDropdownListComponent},
  {path: 'navigation', component: PcNavigationComponent},
  {path: 'dashboard', component: PcHomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
